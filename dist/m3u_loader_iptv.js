// Inject Responsive Styles
if (!document.getElementById('responsive-grid-style')) {
    const style = document.createElement('style');
    style.id = 'responsive-grid-style';
    style.textContent = `
      .video-grid-responsive {
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Mobile default */
        gap: 10px;
        padding: 0;
      }
      @media (min-width: 768px) {
        .video-grid-responsive {
          grid-template-columns: repeat(4, 1fr);
        }
      }
      @media (min-width: 992px) {
        .video-grid-responsive {
          grid-template-columns: repeat(6, 1fr);
        }
      }
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('m3u_loader_iptv.js: DOMContentLoaded');
    const M3U_URL = 'https://raw.githubusercontent.com/TVPRO20/Megatv23/master/tv23.m3u';
    const ITEMS_PER_PAGE = 27; 
    let allVideos = [];
    let currentIndex = 0;
    let isFetched = false;

    const galleryContainer = document.getElementById('dynamic-gallery-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const toggleBtn = document.getElementById('toggle-dynamic-gallery');
    const wrapper = document.getElementById('dynamic-gallery-wrapper');

    console.log('m3u_loader_iptv.js: Elements found:', { galleryContainer, loadMoreBtn, toggleBtn, wrapper });

    // Create Grid Container with Responsive Class
    const gridList = document.createElement('ul');
    gridList.id = 'video_navigation_dynamic';
    gridList.className = 'video-grid-responsive'; // Use the responsive class
    
    if (galleryContainer) {
        galleryContainer.appendChild(gridList);
    }

    async function fetchAndParseM3U() {
        if (isFetched) return;
        
        console.log('m3u_loader_iptv.js: fetchAndParseM3U started');
        if (toggleBtn) {
            toggleBtn.textContent = '⏳ Cargando...';
            toggleBtn.disabled = true;
        }

        try {
            console.log('m3u_loader_iptv.js: Fetching M3U from', M3U_URL);
            const response = await fetch(M3U_URL);
            if (!response.ok) throw new Error('Network response was not ok');
            const text = await response.text();
            console.log('m3u_loader_iptv.js: M3U fetched, lines:', text.split('\n').length);
            parseM3U(text);
            isFetched = true;
            if (toggleBtn) {
                toggleBtn.textContent = '📂 Ocultar Catálogo';
                toggleBtn.disabled = false;
            }
        } catch (error) {
            console.error('m3u_loader_iptv.js: Error fetching M3U:', error);
            if (galleryContainer) {
                galleryContainer.innerHTML = '<p class="text-white text-center">Error al cargar la lista de películas.</p>';
            }
            if (toggleBtn) {
                toggleBtn.textContent = '❌ Error';
            }
        }
    }

    function parseM3U(data) {
        const lines = data.split('\n');
        let currentVideo = {};

        lines.forEach(line => {
            line = line.trim();
            if (line.startsWith('#EXTINF:')) {
                const logoMatch = line.match(/tvg-logo="([^"]*)"/);
                if (logoMatch) currentVideo.logo = logoMatch[1];

                const titleParts = line.split(',');
                if (titleParts.length > 1) {
                    currentVideo.title = titleParts.slice(1).join(',').trim();
                }
            } else if (line.length > 0 && !line.startsWith('#')) {
                currentVideo.url = line;
                if (currentVideo.url && currentVideo.title) {
                    allVideos.push(currentVideo);
                }
                currentVideo = {}; 
            }
        });

        console.log('m3u_loader_iptv.js: Parsed videos count:', allVideos.length);
        loadMoreVideos();
    }

    function loadMoreVideos() {
        console.log('m3u_loader_iptv.js: loadMoreVideos called, currentIndex:', currentIndex, 'total videos:', allVideos.length);
        const nextBatch = allVideos.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);
        console.log('m3u_loader_iptv.js: nextBatch length:', nextBatch.length);

        if (nextBatch.length === 0) {
            console.log('m3u_loader_iptv.js: No more videos to load');
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            return;
        }

        nextBatch.forEach((video, index) => {
            console.log('m3u_loader_iptv.js: Creating element for video:', video.title);
            const li = document.createElement('li');
            li.className = 'cursor-pointer';
            
            const img = document.createElement('img');
            img.src = video.logo || 'https://via.placeholder.com/150x225?text=No+Image';
            img.alt = video.title;
            img.className = 'img_video_nav img-thumbnail w-100'; // w-100 to fill the grid cell
            
            // Optional: Maintain aspect ratio if needed, though w-100 usually handles it in grid
            // img.style.aspectRatio = '2/3'; 
            
            li.onclick = () => {
                console.log('m3u_loader_iptv.js: Video clicked:', video.title, 'URL:', video.url);
                console.log('m3u_loader_iptv.js: typeof window.videoUrl:', typeof window.videoUrl);
                if (typeof window.videoUrl === 'function') {
                    console.log('m3u_loader_iptv.js: Calling window.videoUrl()');
                    window.videoUrl(video.url);
                    document.getElementById('player')?.scrollIntoView({behavior: 'smooth'});
                } else {
                    console.error('m3u_loader_iptv.js: window.videoUrl is not a function!', window.videoUrl);
                }
            };
            
            li.appendChild(img);
            gridList.appendChild(li);
        });

        currentIndex += ITEMS_PER_PAGE;
        console.log('m3u_loader_iptv.js: Updated currentIndex to:', currentIndex);

        if (currentIndex >= allVideos.length) {
            console.log('m3u_loader_iptv.js: All videos loaded, hiding load more button');
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        } else {
            console.log('m3u_loader_iptv.js: Showing load more button');
            if (loadMoreBtn) loadMoreBtn.style.display = 'block';
        }
    }

    // Toggle Logic (use Tailwind `hidden` class for show/hide)
    if (toggleBtn && wrapper) {
        toggleBtn.addEventListener('click', () => {
            console.log('m3u_loader_iptv.js: Toggle button clicked');
            const isHidden = wrapper.classList.contains('hidden');
            console.log('m3u_loader_iptv.js: isHidden:', isHidden);
            if (isHidden) {
                console.log('m3u_loader_iptv.js: Showing wrapper and fetching M3U');
                wrapper.classList.remove('hidden');
                toggleBtn.textContent = '📂 Ocultar Catálogo';
                if (!isFetched) {
                    console.log('m3u_loader_iptv.js: Starting fetch');
                    fetchAndParseM3U();
                } else {
                    console.log('m3u_loader_iptv.js: M3U already fetched');
                }
            } else {
                console.log('m3u_loader_iptv.js: Hiding wrapper');
                wrapper.classList.add('hidden');
                toggleBtn.textContent = '📂 Cargar Catálogo Completo (Beta)';
            }
        });
    } else {
        console.error('m3u_loader_iptv.js: toggleBtn or wrapper not found!', { toggleBtn, wrapper });
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreVideos);
    }
});
