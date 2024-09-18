var video = document.getElementById('video'); 
function videoUrl(url){ video.pause();
const source = video.querySelector("source"); 
source.setAttribute('src', url); 
video.load(); video.play(); }



//web-component

class Menu extends HTMLElement {
	constructor() {
	super();
	this.innerHTML = `

    
    <nav class="flex-container">
    <nav class="flex-container row">
    <nav class="flex-container col-lg-12 m-auto">
    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">
           
            <a href="series24-7retro.html ">
            <img src="https://m.media-amazon.com/images/I/B1d2i--qjtS._SL500_.png "alt="Retro Series " class="img-thumbnail "></a>
           
            <a href="series24-7anime.html ">
            <img src="https://www.apkvisit.com/wp-content/uploads/2022/10/anime-tv-anime-watching-app.png " alt="Anime Series " class="img-thumbnail "></a>

            <a href="series24-7series2.html ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSt__saWKZI-WHtXjPchZ8joqqqscW-Lnk3wgzZv8DVs9vR2bUhqsvskXJg40ooBXtBw&usqp=CAU" alt="Series 2 " class="img-thumbnail "></a>
           
            <a href="series24-7chistosos1.html ">
            <img src="https://i.ytimg.com/vi/YjD5Fy5FNf0/maxresdefault.jpg" alt="Chistosos 1 " class="img-thumbnail "></a>
            
            <a href="series24-7chistosos2.html ">
            <img src="https://i.ytimg.com/vi/vqRC9xVxN5g/maxresdefault.jpg " alt="Chistosos 2 " class="img-thumbnail "></a>

            <a href="series24-7retromagico.html ">
            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/525b2544-96a9-41eb-b61f-947526294ebd-profile_banner-480.jpeg " alt="Retro Magico " class="img-thumbnail "></a>
            
            <a href="series24-7retrotoons.html ">
            <img src="https://yt3.googleusercontent.com/ytc/AOPolaRr0hJkdPUOXJ1r5v7vrcj1mS4M9Ru0RxEXUnnjBQ=s900-c-k-c0x00ffffff-no-rj " alt="Retro Toons " class="img-thumbnail "></a>

            <a href="series24-7cine1.html ">
            <img src="https://i0.wp.com/zoomf7.net/wp-content/uploads/2020/03/sala-de-cine.jpg " alt="Cine 1 " class="img-thumbnail "></a>
            
            <a href="series24-7cine2.html ">
            <img src="https://www.lavoz.com.ar/resizer/GCZpJeNMLMBeqQKGN7gWLzG-2cU=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/TKK7KZEVE5HYFBLCEN3O4AZXMA.jpg " alt="Cine 2 " class="img-thumbnail "></a>

            <a href="series24-7tvseries.html ">
            <img src="https://cdn-icons-png.flaticon.com/512/6209/6209965.png " alt="TV Series " class="img-thumbnail "></a>
            
            <a href="series24-7Videoclub.html ">
            <img src="https://www.billetweb.fr/files/page/thumb/video-club.jpg?v=1673042814 " 
            alt="Videoclub " class="img-thumbnail "></a>

            
            <a href="series24-7runtime.html ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQ1_mOaBrgjnGCL6TZbo-EYpnC87Se8bcUIiZ95_YoiRsbdZ437Bcx5KgCTq4BmfEc8E&usqp=CAU " alt="Runtime " class="img-thumbnail "></a>
            
            <a href="series24-7cartoonnetwork.html ">
            <img src="https://i.ytimg.com/vi/0BkSC197-ss/maxresdefault.jpg " 
            alt="Cartoon Network " class="img-thumbnail "></a>

            <a href="series24-7telemax.html ">
            <img src="https://3.bp.blogspot.com/-Rj3GihMSCD4/VmDSmjQYmTI/AAAAAAAAANA/ARhShYiOjvI/s1600/gallery_1164_2_21487.png " alt="Telemax " class="img-thumbnail "></a>
            
            <a href="series24-7delmercadoP.html ">
            <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0138580a821f86d1e91c4c07593cb66cc4151f007963910cef4c5bad5068feb0._V_SX268_.jpg " 
            alt="Del Mercado " class="img-thumbnail "></a>

            <a href="series24-7lospitufos.html ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxCXPtuC-tJhEA_5mhom7Fu8YizY1Ns7HQyMPOndUbd6EgsGifTDDib5QwboAAZJgA4c&usqp=CAU " alt="Los Pitufos " class="img-thumbnail "></a>
            
            <a href="series24-7ranma.html ">
            <img src="https://m.media-amazon.com/images/S/pv-target-images/6bcfa534ac8997e83a715ab0d09a562390e7f3312149d6647442798fa7d58eaa.jpg " 
            alt="80s " class="img-thumbnail "></a>
            
            <a href="series24-7alternative.html ">
            <img src="https://d14c63magvk61v.cloudfront.net/hls/22865/stingray-rock-alternative/poster_20200717_232723.jpg " 
            alt="Alternative " class="img-thumbnail "></a>

            <a href="series24-7neotv.html ">
            <img src="https://neotvdigital.com.ar/imagenes/fb.png " 
            alt="Neo TV " class="img-thumbnail "></a>

            <a href="series24-7rockon.html ">
            <img src="https://i.etsystatic.com/24478728/r/il/d0df00/3129267801/il_fullxfull.3129267801_l9um.jpg " 
            alt="Rock on " class="img-thumbnail "></a>
            
            <a href="series24-7vevo90s.html ">
            <img src="https://hoyeeh.com/upload/190s&80s.png " 
            alt="90s " class="img-thumbnail "></a>

            <a href="series24-7neoxtv.html ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3OUrdRsoIBoguJ00VCTAIqR7l6HVi0XikA&s " 
            alt="Neo Xtv " class="img-thumbnail "></a>

            <a href="series24-7latinatv.html ">
            <img src="https://yt3.googleusercontent.com/Brh94gn82_uzy3hwYDmiJAmHskgWOYSp3Xi4EOsxm66-R9gpiy8TQW8s3n48z49k3cWJH-KYMw=s900-c-k-c0x00ffffff-no-rj " 
            alt="Latinatv " class="img-thumbnail "></a>

            <a href="series24-7conectatv.html ">
            <img src="https://play-lh.googleusercontent.com/7Rvs0rCdmfWjm-srLmJ5a2UM8hnvGzLC7QCDrUtBxuclIGymGLjVsVHHrv2kdIDZiQ " 
            alt="Conectatv " class="img-thumbnail "></a>
            
            <a href="series24-7theretroch.html ">
            <img src="https://pbs.twimg.com/profile_images/713155831924191234/HqQCRMqf_400x400.jpg " 
            alt="The Retro Ch " class="img-thumbnail "></a>

            <a href="series24-zaztv.html ">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVsFyfGMJsQQUv1FOn5IjG0_Afn1l0x7HeaUw266GNYbmeLaCrqXEaAbRkxuw7rWiYqKGCsR1yN1dPvtjMsf-k7uS4pyEq_VeBKDMDdikPj2F6Ob4W__t42pTzaaE554e5OVlF_6JoBzqNdqnnNH-zZCVH7rO1_QPhFr-JT5d0p9qAaDwRX6uHh3QL/w640-h480-rw/zaz-logoroku.png " 
            alt="Zaz TV " class="img-thumbnail "></a>
            
            <a href="series24-7pokemon.html ">
            <img src="https://www.venus.com.py/wp-content/uploads/2018/02/Pokemon.jpg " 
            alt="Pokemon " class="img-thumbnail "></a>

            <a href="series24-7toonami.html ">
            <img src="https://i.ytimg.com/vi/EX2hKdZE9O0/maxresdefault.jpg" 
            alt="Toonami " class="img-thumbnail "></a>

            <a href="series24-7bobesponja.html ">
            <img src="https://m.media-amazon.com/images/S/pv-target-images/b72e47f544ddc54b33a902bb69f7e76f68f38374684d781987d84d58978f7869.jpg" 
            alt="Bob Esponja " class="img-thumbnail "></a>

            <a href="series24-7x-men.html ">
            <img src="https://hips.hearstapps.com/hmg-prod/images/t0gu16p897z71-png-1644415515.jpg?crop=1xw:0.8619617224880383xh;center,top&resize=1200:*" 
            alt="X Men " class="img-thumbnail "></a>

            <a href="series24-7saintseiya.html ">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhb9KotQJQw2DutMWK7QR1STZTQjy2-sLam2olhhh5w1wQ5eRpRwIctntb9SnoU6NtDuCSjZRYGvHXLkQ5vw9dKzjKsmwD-k8Hw78sqwKh3LzmjJ-hGyH5tLimRr_heG5mGW3CwbL29bKM/s1600/caballerosdelzodiacoimganmtv.png" 
            alt="Saint Seiya " class="img-thumbnail "></a>

            <a href="series24-7narutoshippuden.html ">
            <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/3f283002b47c62b1e5d311c45f95c97e.jpe" 
            alt="Naruto Shippuden " class="img-thumbnail "></a>

            <a href="series24-7dragon-ball.html ">
            <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/ce1e64ed1cb39a718b070960c86e0db2.jpe" 
            alt="Dragon Ball " class="img-thumbnail "></a>

            <a href="series24-7dragon-ball-z.html ">
            <img src="https://image.api.playstation.com/vulcan/ap/rnd/202302/2107/4f15fe511e0062262a894493e6dcdbee2f615abb4024b384.png" 
            alt="Dragon Ball Z " class="img-thumbnail "></a>

            <a href="series24-7dragon-ball-gt.html ">
            <img src="https://sm.ign.com/ign_latam/screenshot/default/dbgt_nwhj.jpg" 
            alt="Dragon Ball Gt " class="img-thumbnail "></a>

            <a href="series24-7futurama.html ">
            <img src="https://lumiere-a.akamaihd.net/v1/images/futurama_season12_social_static_4x5_1080x1350_date_es-e_3f76326a.png?region=0,0,1080,609&width=960" 
            alt="Futurama " class="img-thumbnail "></a>

             <a href="series24-7simpsons.html ">
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D2862466468107185C7B763815ABC608AE56ECCACF5C0DB11F15919A072F569/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp" 
            alt="Simpsons " class="img-thumbnail "></a>

            <nav/>
            <nav/>

    <ul/>
`

 }
}
//video-control

var video = document.getElementById('video'); 
function videoUrl(url){ video.pause();
const source = video.querySelector("source"); 
source.setAttribute('src', url); 
video.load(); video.play(); }

customElements.define('menu-component', Menu);


