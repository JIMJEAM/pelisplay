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
    const M3U_URL = 'https://raw.githubusercontent.com/TVPRO20/Newpelis22/master/pelis22.m3u';
    const ITEMS_PER_PAGE = 27; 
    let allVideos = [];
    let currentIndex = 0;
    let isFetched = false;

    const galleryContainer = document.getElementById('dynamic-gallery-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const toggleBtn = document.getElementById('toggle-dynamic-gallery');
    const wrapper = document.getElementById('dynamic-gallery-wrapper');

    // Create Grid Container with Responsive Class
    const gridList = document.createElement('ul');
    gridList.id = 'video_navigation_dynamic';
    gridList.className = 'video-grid-responsive'; // Use the responsive class
    
    if (galleryContainer) {
        galleryContainer.appendChild(gridList);
    }

    async function fetchAndParseM3U() {
        if (isFetched) return;
        
        if (toggleBtn) {
            toggleBtn.textContent = '⏳ Cargando...';
            toggleBtn.disabled = true;
        }

        try {
            const response = await fetch(M3U_URL);
            if (!response.ok) throw new Error('Network response was not ok');
            const text = await response.text();
            parseM3U(text);
            isFetched = true;
            if (toggleBtn) {
                toggleBtn.textContent = '📂 Ocultar Catálogo';
                toggleBtn.disabled = false;
            }
        } catch (error) {
            console.error('Error fetching M3U:', error);
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

        loadMoreVideos();
    }

    function loadMoreVideos() {
        const nextBatch = allVideos.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

        if (nextBatch.length === 0) {
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            return;
        }

        nextBatch.forEach(video => {
            const li = document.createElement('li');
            li.className = 'cursor-pointer';
            
            const img = document.createElement('img');
            img.src = video.logo || 'https://via.placeholder.com/150x225?text=No+Image';
            img.alt = video.title;
            img.className = 'img_video_nav img-thumbnail w-100'; // w-100 to fill the grid cell
            
            // Optional: Maintain aspect ratio if needed, though w-100 usually handles it in grid
            // img.style.aspectRatio = '2/3'; 
            
            li.onclick = () => {
                if (typeof videoUrl === 'function') {
                    videoUrl(video.url);
                    document.getElementById('video')?.scrollIntoView({behavior: 'smooth'});
                } else {
                    console.error('videoUrl function not found');
                }
            };
            
            li.appendChild(img);
            gridList.appendChild(li);
        });

        currentIndex += ITEMS_PER_PAGE;

        if (currentIndex >= allVideos.length) {
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        }
    }

    // Toggle Logic
    if (toggleBtn && wrapper) {
        toggleBtn.addEventListener('click', () => {
            if (wrapper.classList.contains('hidden')) {
                wrapper.classList.remove('hidden');
                if (!isFetched) {
                    fetchAndParseM3U();
                } else {
                    toggleBtn.textContent = '📂 Ocultar Catálogo';
                }
            } else {
                wrapper.classList.add('hidden');
                toggleBtn.textContent = '📂 Mostrar Catálogo Completo';
            }
        });
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreVideos);
    }
});
