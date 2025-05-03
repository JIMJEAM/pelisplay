var video = document.getElementById("video");
function videoUrl(url) {
  video.pause();
  const source = video.querySelector("source");
  source.setAttribute("src", url);
  video.load();
  video.play();
}

//web-component

class Menu extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div style="conten-visivility: auto;">
     <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">
    <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/Una_pelaicula_de_Minecraft-276344892-large.jpg" alt="Minecraft (2025)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia800807.us.archive.org/5/items/cubos-el-juego-2025/Cubos%20el%20juego%20%282025%29.mp4')"> </li>
    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/49551-615592-20250314041252.jpg" alt="Rescate implacable (2025)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia600708.us.archive.org/28/items/vaca-super-rescue/vaca%20super%20Rescue.mp4')"> </li> 
     <li class="cursor-pointer"> <img src=https://m.media-amazon.com/images/M/MV5BYmY0M2Y1YzgtM2FkMC00M2ZjLTljNzgtZDM0NzM2ZTIwZDM5XkEyXkFqcGc@._V1_.jpg" alt="
     Código Negro (2025)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia600709.us.archive.org/28/items/codigo-de-barras/Codigo%20de%20barras.mp4')"> </li>
    </ul>


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">
    <li class="cursor-pointer"> <img src="https://assets.biggerpicture.ai/assets/HO-1600/eventmaster/1136_4.png" alt="El mono (2025)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia903207.us.archive.org/9/items/Kmonito/Kmonito.mp4')"> </li>
    <li class="cursor-pointer"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_jwdXm6FHdNgv88RD39gMGgIDCDG8LRpOA&s" alt="La compañera perfecta (2025)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601300.us.archive.org/30/items/Copernico/Copernico.mp4')"> </li> 
     <li class="cursor-pointer"> <img src="https://lumiere-a.akamaihd.net/v1/images/rochelle_teaser2_poster_las_9a24549d.jpeg?region=0%2C0%2C770%2C1100" alt="
     Capitan America el nuevo mundo (2025)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601404.us.archive.org/3/items/dobereiner/D%C3%B6bereiner.mp4')"> </li>
    </ul>


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">
    <li class="cursor-pointer"> <img src="https://es.web.img2.acsta.net/c_210_280/img/c3/70/c3703dc747fb19cf232978ea08e8e9f4.jpg" alt="Sonic (2025)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia600808.us.archive.org/1/items/sonet-3.5/Sonet3.5-.mp4')"> </li>
    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/48347-701766-20241210092337.jpg" alt="Kraven el cazador (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia800609.us.archive.org/14/items/Crackets/Crackets.mp4')"> </li> 
     <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/48473-746696-20241216112244.jpg" alt="
     Paddington: Aventura en la selva (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia600806.us.archive.org/5/items/padding-pillow/Padding%20pillow.mp4')"> </li>
    </ul>


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">
    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/47807-327301-20241010043952.jpg" alt="Código: Traje Rojo (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia800609.us.archive.org/35/items/Superklaus/Superklaus.mp4')"> </li>
    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/48461-436544-20241217084917.jpg" alt="Mufasa el rey leon (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia800702.us.archive.org/33/items/Mufarse/Mufarse.mp4')"> </li> 
     <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/47299-843109-20240830022501.jpg" alt=" EL Conde de montecristo (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia904501.us.archive.org/16/items/konde_202502/Konde.mp4')"> </li>
    </ul>


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">
    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/48621-607155-20241218051239.jpg" alt="El robo perfecto: Pantera (2025)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia904502.us.archive.org/32/items/robber-inprogress/RobberInprogress.mp4')"> </li>
    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/46698-644406-20240621115458.jpg" alt="MaXXXine (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia800806.us.archive.org/6/items/Maximad/Maximad.mp4')"> </li> 
     <li class="cursor-pointer"> <img src="https://megustaelcine.com/wp-content/uploads/2024/10/POSTER-El-aprendiz.jpg" alt="
     The Apprentice. La historia de Trump (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia800609.us.archive.org/1/items/beginner_202502/Beginner.mp4')"> </li>
    </ul>


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">
     <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/47893-122524-20241010010020.jpg" alt=" Superman: La historia de Christopher Reeve (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia600808.us.archive.org/29/items/ese-man/Ese-man.mp4')"> </li>
    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/48111-551207-20241128085911.jpg" alt=" Moana 2 (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia903201.us.archive.org/7/items/mamona-2/Mamona2.mp4')"> </li>
    <li class="cursor-pointer"> <img src="https://m.media-amazon.com/images/S/pv-target-images/709d19ee83c23c1cff8d6114545decf12e5f66bba1ed844f4222ae31bd468e5d.jpg" alt=" Jurado Nº 2 (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601408.us.archive.org/15/items/neta-melo-juras-num-2/NetaMeloJurasNum2.mp4')"> </li>
    </ul>


     <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">
    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/47963-399604-20241120081300.jpg" alt=" Wicked (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia903200.us.archive.org/29/items/dekci-w-21/DekciW21.mp4')"> </li>
    <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/Gladiator_II-808387712-large.jpg" alt=" Gladiator 2 (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601501.us.archive.org/24/items/Peleadordos/Peleadordos.mp4')"> </li>
    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/47213-327845-20240822060321.jpg" alt=" No hables con extraños (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia600805.us.archive.org/25/items/elcocono/elcocono.mp4')"> </li>
    </ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">
    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/47607-774281-20241024062218.jpg" alt="
    Venom el ultimo baile (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia600409.us.archive.org/20/items/Bennim/Bennim.mp4')"> </li>
    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/48015-422893-20241017113401.jpg" alt="
    Terrifier 3: Payaso Siniestro (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia800806.us.archive.org/34/items/yaso-3/Yaso3.mp4')"> </li>
    <li class="cursor-pointer"> <img src="https://www.findelahistoria.com/web/wp-content/uploads/2024/07/Hellboy-The-Crooked-Man-poster.jpg" alt="
    Hellboy: The Crooked Man (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601709.us.archive.org/0/items/diablillo-pillo/DiablilloPillo.mp4')"> </li>
    </ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">
     <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/47427-649819-20240911011247.jpg" alt="
    Robot Salvaje (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://hetbuild860092.takeplcdn.art/d/e2zpwlcjo7hvw4m63wv5j3kot4gnhzwutlulh3qejplieoll2hxidzhfmp2hgqxwambk65jb/Um9ib3Qgc2FsdmFqZSAoMjAyNCk=.LAT.mp4')"> </li>
    <li class="cursor-pointer"> <img src="https://www.justwatch.com/images/poster/318099780/s718/al-rescate-de-fondo-de-bikini-la-pelicula-de-arenita-mejillas.jpg" alt="
    Al rescate de Fondo de Bikini (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia800109.us.archive.org/13/items/bob-toronja/BobToronja.ia.mp4')"> </li>
    <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/La_sustancia-259383439-large.jpg" alt="
    La Sustancia (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia600608.us.archive.org/26/items/simi-active/SimiActive.mp4')"> </li>
    </ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">
    <li class="cursor-pointer"><a href="https://gamovideo.com/gqtg2wddawqy"  target="_blank "><img src="https://cdn.mallmarina.cl/mallconcepcion/uploads/2024/09/Joker-2.jpg" alt="
   Joker: Folie à Deux (2024)" class="img_video_nav img-thumbnail   w-50 "></a></li>
    <li class="cursor-pointer"><a href="https://gamovideo.com/9lnh1lej8qkd"  target="_blank "><img src="https://moviecrazyplanet.com/wp-content/uploads/2024/07/Transformers-Uno-Chris-Hemsworth-.jpg" alt="
   Transformers Uno (2024)" class="img_video_nav img-thumbnail   w-50 "></a></li>
    <li class="cursor-pointer"><a href="https://gamovideo.com/nkhr5b5o3ez5"  target="_blank "><img src="https://image.tmdb.org/t/p/original/wIDulcEDrbW5tLaAHIUqODaTGG6.jpg" alt="
   Instintos asesinos (2024)" class="img_video_nav img-thumbnail   w-50 "></a></li>
    </ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">
    <li class="cursor-pointer"><a href="https://gamovideo.com/86zg4j4qc25y"  target="_blank "><img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/47098-323896-20240812011446.jpg" alt="
   Tipos de Gentileza (2024)" class="img_video_nav img-thumbnail   w-50 "></a></li>
    <li class="cursor-pointer"><a href="https://gamovideo.com/uv8ulhzazwg5"  target="_blank "><img src="https://image.tmdb.org/t/p/w500//865DntZzOdX6rLMd405R0nFkLmL.jpg" alt="
   Borderlands (2024)" class="img_video_nav img-thumbnail   w-50 "></a></li>
    <li class="cursor-pointer"><a href="https://gamovideo.com/s2d9kxwzm81w"  target="_blank "><img src="https://megustaelcine.com/wp-content/uploads/2024/08/POSTER-El-cuervo-2024-717x1024.jpg" alt="
   El cuervo (2024)" class="img_video_nav img-thumbnail   w-50 "></a></li>
    </ul>

   

 

 <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/47141-607088-20240904070840.jpg" alt="Beetlejuice Beetlejuice (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fsep24%2FVer%20Beetlejuice%20Beetlejuice%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/sIFz9N45kbGHScotbeK1r1LZXQi.jpg" alt="
    Miller (2024) " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjul24%2FVer%20Un%20lugar%20en%20silencio-%20D%C3%ADa%20uno%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/46sp1Z9b2PPTgCMyA87g9aTLUXi.jpg" alt="Lift: Un robo de primera clase (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://axa4wow3dcia.objectstorage.us-phoenix-1.oci.customer-oci.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/pelis2024%2FVer%20Lift-%20Un%20robo%20de%20primera%20clase%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4')"></li>
   
  




</ul>  

<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500//b33nnKl1GSFbao4l3fZDDqsMx0F.jpg" alt="Alien: Romulus (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fago24%2FVer%20Alien-%20Romulus%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPEON5NKz5tx6ovoCBuCN15uY8Ija_eZQnw&s" alt="
    Colateral (2024) " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fago24%2FVer%20Colateral%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiG3w8NkOgQMSEm5Mp7wBKuhyhJh3YeaPfg&s" alt="Mi villano favorito 4 (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fago24%2FVer%20Mi%20villano%20favorito%204%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   
  




</ul> 

 <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">
    <li class="cursor-pointer"> <img  src="https://i.pinimg.com/736x/6f/4a/b8/6f4ab823d4a61e08724d647c14daa888.jpg" alt="Deadpool and Wolverine (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801505.us.archive.org/28/items/picina-y-tacos-al-pastor/picina%20y%20tacos%20al%20pastor.mp4')"></li>
  
    <li class="cursor-pointer"> <img  src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/2024/5/w1280/oyQXRZD0CHC4sf3lMph3X3cJzSw.jpg" alt="
    La Joven y El Mar (2024) " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjul24%2FVer%20La%20Joven%20y%20El%20Mar%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/zszRKfzjM5jltiq8rk6rasKVpUv.jpg" alt="Un detective suelto en Hollywood 4 (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjul24%2FVer%20Un%20detective%20suelto%20en%20Hollywood-%20Axel%20F.%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   
  




</ul>


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHfhTF0oy6skJekzn-urBiUqvITm35cc_Hf0TZgHDYn3XF8AnShEj7tsymx88fGU5npQ&usqp=CAU" alt="En las profundidades del Sena (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjun24%2FVer%20En%20las%20profundidades%20del%20Sena%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/46050-191463-20240411040001.jpg" alt="
    Winnie the Pooh: Sangre y miel 2 (2024) " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjun24%2FWatch%20Winnie%20the%20Pooh%20Blood%20and%20Honey%202024%20WEBDLSCR1080L4T%20mp4.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsMHxazymkapJQdamK14_mH4GX4yj7j9nPg&s" alt="Winnie the Pooh: Sangre y miel 1 (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Foctubre%2FWatch%20Winnie%20the%20Pooh%20Miel%20Y%20Sangre%20mp4.mp4')"></li>
   
  




</ul>


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg" alt="Atlas (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Atlas%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/k69kkwsipkPn7Nzq488kHGQTPo.jpg" alt="
    Mi Querida Oni (2024) " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Mi%20Querida%20Oni%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/46315-649869-20240605010322.jpg" alt="Bad Boys: Hasta la muerte (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjun24%2FVer%20Bad%20Boys-%20Hasta%20la%20muerte%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   
  




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://storage.googleapis.com/citicinemas-store/Movie-1723/poster/E7hGtIrEAXzs/46045-576386-20240410104502.jpg" alt="El planeta de los simios: nuevo reino (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20El%20planeta%20de%20los%20simios-%20Nuevo%20reino%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mWDsHg6vmNN6cYUiSo2_MksBvQJpe2tnsA&s" alt="
    Furiosa: De la saga Mad Max (2024) " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Furiosa-%20De%20la%20saga%20Mad%20Max%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/45970-108450-20240403081904.jpg" alt="Tarot de la muerte (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Tarot%20de%20la%20muerte%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   
  




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://media.filmelier.com/tit/9F7PZQ/poster/sin-glasear_Gsg31pQ.jpeg" alt="Sin glasear (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Sin%20glasear%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/v2YJ94cEfV8ORTPUqdBrwMosJbR.jpg" alt="
    Luna sin miel (2024) " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Luna%20Sin%20Miel%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/Fiesta_en_la_madriguera-375852656-large.jpg" alt="Fiesta en la Madriguera (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Fiesta%20en%20la%20Madriguera%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   
  




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/46123-684523-20240430031929.jpg" alt="Garfield: La película (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FGarfield%20Fuera%20de%20Casa%20fastplay.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBs2mFO9J3RgyBZsobQwi2-yTPZXsOknAN4zkfsDVqbdbjeENaFWLqihChov-NChFc-uA&usqp=CAU" alt="
    El especialista (2024) " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Profesi%C3%B3n%20peligro%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/5Ggf38fEAhOCdgvfLOfUcfEQTQT.jpg" alt="Abigail (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmay24%2FVer%20Abigail%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   
  




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRyAwfEhE0LMmjXQsOVTyLzAF7lANPpKCQUK4dYOUWjn3kpaakaDhvT6ham5FlfW5z_g&usqp=CAU" alt="El Pájaro Loco se va de campamento (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fsep24%2FVer%20Beetlejuice%20Beetlejuice%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/cxevDYdeFkiixRShbObdwAHBZry.jpg" alt="
    Rebel Moon (Parte dos) (2024)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Rebel%20Moon%20-%20Parte%20Dos-%20La%20Guerrera%20que%20Deja%20Marcas%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/H6vke7zGiuLsz4v4RPeReb9rsv.jpg" alt="Desafiantes (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Desafiantes%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   
  




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w342/fRaBjht3S1HU6lJrz2SoFwwOZQM.jpg" alt="El Arca de Noé (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Arca%20de%20No%C3%A9%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/qjx6CMGEqYheoOhwUrDDAyke9z1.jpg" alt="
    Los Menospreciados (2024)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fene24%2FVer%20Los%20menospreciados%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://images.justwatch.com/poster/312328260/s718/codigo-8.jpg" alt="Código 8 (Parte 2) (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Ffeb24%2FVer%20C%C3%B3digo%208-%20Renegados%20(Parte%20II)%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   
  




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/45298-186406-20240125044141.jpg" alt="Baghead: Contacto con la muerte (2023)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Baghead-%20Contacto%20Con%20La%20Muerte%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://moviefilms.com.uy/wp-content/uploads/2023/12/Imaginario.jpg" alt="
    Imaginario: Juguete diabólico (2024)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Imaginario-%20juguete%20diab%C3%B3lico%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/oJQdLfrpl4CQsHAKIxd3DJqYTVq.jpg" alt="Ricky Stanicky: El impostor (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Ricky%20Stanicky-%20El%20impostor%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   
  




</ul>


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://m.media-amazon.com/images/S/pv-target-images/9eeda69afbfe596d9d652b7f00f3aeb9e612fec80a464b28210ac04b53448b49.jpg" alt="Diario de mi Vagina (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Diario%20de%20mi%20vagina%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/45515-606465-20240320095056.jpg" alt="
    Apocalipsis Fantasma (2024)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Ghostbusters-%20Apocalipsis%20fantasma%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/sMp34cNKjIb18UBOCoAv4DpCxwY.jpg" alt="Damsel (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Damsel%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   
  




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnP6dGaZj99SsixT3FJe6YGjFVpZlBkDzDzXFzAb7hKnPAkX2LQigXHK9_KdOmn_0Fq8&usqp=CAU" alt="Atrapados en lo Profundo (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Atrapados%20en%20lo%20Profundo%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/qfPjPZF2AqB2XnXPFcHlYtlQRS3.jpg" alt="
    Frida (2024)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FWatch%20Frida%202024%201080L4T%20mp4.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26E-oIQ0BOqwm97UXPi99Tnh235RLgBF2mIRnuuMQ2Q&s" alt="Un ladrón romántico (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Un%20ladr%C3%B3n%20rom%C3%A1ntico%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   
  




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://www.mubis.es/media/movies/7895/324462/la-primera-profecia-original.jpg" alt="La primera profecía" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20La%20primera%20profec%C3%ADa%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://es.web.img2.acsta.net/pictures/24/01/10/17/08/1200463.jpg" alt="
    Arthur (2024)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Arthur%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://es.web.img2.acsta.net/pictures/24/02/27/16/28/3250275.jpg" alt="Godzilla y Kong: El nuevo imperio (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fabr24%2FVer%20Godzilla%20y%20Kong-%20El%20nuevo%20imperio%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   
  




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500/sMp34cNKjIb18UBOCoAv4DpCxwY.jpg" alt="Damsel (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Damsel%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg" alt="
    Kung Fu Panda 4 (2024)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FWatch%20Kung%20Panda%202024%201080p%20CAMRip%20LAT%20DUB%201XBET%20mp4.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9oxWy9BXcuoHYuggc43qush4yRTiQ6rfbL6S2X-WCPlVYxzr4xtyrYmSWE7gd6gADeg&usqp=CAU" alt="Megamente el sindicato del mal (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Megamente%20contra%20el%20sindicato%20de%20Doom%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   
  




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://mx.web.img2.acsta.net/pictures/24/01/24/20/40/2403201.jpg" alt="Duna - Parte dos (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20Duna-%20Parte%20dos%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTijhP5A--1pwgp21Ra9GqI7mYYC0n101WA&s" alt="
    Bob Marley: la leyenda (2024)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Ffeb24%2FVer%20Bob%20Marley-%20La%20leyenda%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg" alt="Madame Web (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Ffeb24%2FVer%20Madame%20Web%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   

    </a>




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://play-lh.googleusercontent.com/b4brmc3O6UtWP7W1jlAPPC35i8tfRZztnn6-GCFjAobAKP7P8vkl0H-RhRtLZUbeuEyTWp7B6NpuJvJNYW8=w240-h480-rw" alt="Ricky Stanicky: El impostor (2024)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Ffeb24%2FVer%20Chicas%20pesadas%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://images.justwatch.com/poster/312181920/s718/pobres-criaturas.jpg" alt="
    Pobres criaturas (2023)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Ffeb24%2FVer%20Pobres%20Criaturas%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9k15gwJdGQMfLFsIIX5Qo6KMxPY2UAo_mQB_nA9TsBkdMgsBDRlHIafOdMorQ62sxMj8&usqp=CAU" alt="El astronauta (2024)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fmar24%2FVer%20El%20astronauta%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   

    </a>




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://media.filmelier.com/tit/kRiequ/poster/el-bufon_3A3gQuA.jpeg" alt="El bufón (2023) " class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20El%20buf%C3%B3n%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/9sA8HGHvbm9CqIJZfFmFZxgsOH6.jpg" alt="
    Welcome al Norte (2023)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fnoviembre%2FVer%20Welcome%20al%20Norte%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/t2gpwYUF5xZUOiJKKg23ydpmjKk.jpg" alt="1962 Halloween Masacre (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fnoviembre%2FVer%201962%20Halloween%20Massacre%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   

    </a>




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://www.mubis.es/media/movies/7837/322026/el-arte-de-matar-original.jpg" alt="El arte de matar (2023) " class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20El%20arte%20de%20matar%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2G0LGxj8psURJiZfYnzupQ3xdbs42eEotxkaJQ9mUCPTSF9xjVJlfgD7sI1JPmNn-q6I&usqp=CAU" alt="
    Los Archies (2023)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20Los%20Archies%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://www.sonypictures.com.mx/sites/mexico/files/2024-01/Key-Art_1400x2100_Napoleon_Mx.jpg" alt="Napoleón (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fnoviembre%2FWatch%20Napoleon%202023%201080p%20CAMRip%20LAT%20DUB%20Juga%20Bet%20mkv.mp4')"></li>
   

    </a>




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://22minutoscon.com/wp-content/uploads/2023/10/portada-foto-destacada.jpg" alt="La sociedad de la nieve (2023) " class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://axa4wow3dcia.objectstorage.us-phoenix-1.oci.customer-oci.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/Ver%20La%20sociedad%20de%20la%20nieve%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://www.cinematte.com.es/wp-content/uploads/2022/12/noche-de-paz-154154009-large-656a00d127463.jpeg" alt="
    Noche de paz (2023)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20Noche%20de%20paz%20online%20HD%20-%20Cuevana%202%20(CAM).mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://media.filmelier.com/tit/1JSFKK/poster/pollitos-en-fuga-el-origen-de-los-nuggets_LU38SRk.jpeg" alt="Pollitos en fuga: el origen de los nuggets (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20Pollitos%20en%20fuga-%20El%20origen%20de%20los%20nuggets%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   

    </a>




</ul>

<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/Wonka-476523968-large.jpg" alt="Wonka (2023) " class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20Wonka%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w185/eLqChOdjG1i1LEuXQlmGsAEsClV.jpg" alt="
    El pastor (2023) " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20The%20Shepherd%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/original/yD6A6BFYl8crNfZ3vs6LzxD8c1g.jpg" alt="Silber y el libro de los sueños (2023) " class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20Silber%20y%20el%20libro%20de%20los%20sue%C3%B1os%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   

    </a>




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/original/6EJUEeC9dQglAJhLqluX70hE7Xs.jpg" alt="Mavka: Guardiana del bosque (2023) " class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20Mavka-%20Guardiana%20del%20bosque%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://media.filmelier.com/tit/DBhKZS/poster/en-el-desierto_TvySbTo.jpeg" alt="
    En el desierto (2023)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20%D9%86%D8%A7%D9%82%D8%A9%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://play-lh.googleusercontent.com/mPZOhdgclWR_E8v5XPJVcq5-814EU5dvmBHOWYdqubm___k-00E4F3uaFcc_vNhiYbudMSZPChsMSuNNVg" alt="Pollitos en fuga: el origen de los nuggets (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fdiciembre%2FVer%20El%20Sexto%20Bus%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   

    </a>




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="/imagenes/Aquaman Y El Reino Perdido.jpg" alt="Aquaman y el reino perdido (2023) " class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://axa4wow3dcia.objectstorage.us-phoenix-1.oci.customer-oci.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/Ver%20Aquaman%20y%20el%20reino%20perdido%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://www.serantes.com/wp-content/uploads/2023/10/SKATROLLS3.jpg" alt="
    Trolls 3: Se Armó La Banda (2023)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://notabasica.com/612132/Trolls%203%20-%20Se%20Arm%C3%B3%20la%20Banda.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://es.web.img3.acsta.net/c_310_420/pictures/23/09/20/15/05/0470801.jpg" alt="Five Nights at Freddy's" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://notabasica.com/612132/FiveNightsAtFreddys.mp4')"></li>
   

    </a>




</ul>

<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img src="https://i.blogs.es/946bf1/balada-de-pajaros-cantores/650_1200.jpg" alt="Los juegos del hambre: balada de pájaros cantores y serpientes (2023)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://dl.dropbox.com/scl/fi/9b5sq647zyj29oyz9i9ir/Ju3g0S-h4mbr3-s0ngs.mp4?rlkey=dghwp74cu106iym294iyqlra9')"> </li> 

       
    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/43631-480432-20230908013228.jpg" alt="
    Resistencia (2023)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://dl.dropbox.com/scl/fi/c2nsu7t0pph2pv60v2x2k/creator.mkv?rlkey=80ib396dostkw9vgnuxawqu03')">
    </li>

    <li class="cursor-pointer"> <img  src="https://upload.wikimedia.org/wikipedia/en/9/9f/Obi_Wan_Kenobi_Patterson_Cut_poster.png" alt="Obi-Wan Kenobi Patterson Cut (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://dl.dropbox.com/scl/fi/0yy8fzh9ek2ga3frkqxmf/0B1W4N.mp4?rlkey=0xjaggovyhslntruukbufes3r')"></li>
   

    </a>




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/zwcmjn3qKhP7kUmpgNT0f61xzU3.jpg" alt="
    Radical (2023)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Foctubre%2FVer%20Radical%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>

    <li class="cursor-pointer"> <img  src="https://www.lahiguera.net/cinemania/pelicula/10653/los_asesinos_de_la_luna-cartel-11388.jpg" alt="Los asesinos de la luna (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Foctubre%2FVer%20Los%20asesinos%20de%20la%20luna%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/35268.jpg" alt="el justiciero capitulo final" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Foctubre%2FVer%20El%20Justiciero-%20Cap%C3%ADtulo%20final%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 


    </a>




</ul>   

<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
<li class="cursor-pointer"> <img  src="https://media.filmelier.com/tit/8tKDaY/poster/plan-de-estudios_uxRsh_Q.jpeg" alt="
Plan de estudios" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://tvinnov.online/CINECAN/The.Lesson.2023.HDCAM/The.Lesson.2023.HDCAM.c1nem4.x264-SUNSCREEN.mp4')">
</li>

<li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/nowhere-676226361-mmed.jpg" alt="Nowhere (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fseptiembre%2FVer%20Nowhere%20online%20HD%20-%20Cuevana%202.mp4')"></li>





<li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500/3MxgXI3VO7QCNnP0mPBjxLIemNM.jpg" alt="El lado dulce de la traición (2023)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://od.lk/s/NV8xODg5NDUwOTFf/HDVER%20El%20lado%20dulce%20de%20la%20traici%C3%B3n%202023.mp4')"> </li> 


</a>




</ul>     

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

    <li class="cursor-pointer"> <img  src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/2022/9/w1280/qDukjmqZsgyLN7UKsaGoO69Txcq.jpg" alt="
    La maldición del hombre lobo (2022)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Foctubre%2FVer%20Hombre%20Lobo%20por%20la%20Noche%20a%20color%20online%20HD%20-%20Cuevana%202.mp4')">
    </li>    

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/krA2iXd1PK1vhg4jeWfbSD4fSJi.jpg" alt="Papás a la antigua (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://od.lk/s/NV8xODg4OTAyNzZf/HDVer%20Pap%C3%A1s%20a%20la%20antigua%202023.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500/mClrCMfGpOqTSiuCTSK67WZ92x5.jpg" alt="Monster High 2 (2023)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://od.lk/s/NV8xODg5MjAxODhf/HDVer%20Monster%20High%202%202023.mp4')"> </li> 


    </a>




</ul>     

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/wUvUcLTxc83k4l8psyO2pDYHHB3.jpg" alt="
    La libreta negra (2023)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fseptiembre%2FVer%20La%20Libreta%20Negra%20online%20HD%20-%20Cuevana%202.mp4')"></li> 

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/19CG7aTgNRF8DvM3Cla4Zn2qWzh.jpg" alt="Soltera codiciada 2 (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fseptiembre%2FVer%20Soltera%20codiciada%202%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500/9GuvODahvuFqdhuZ16aBLR4UJoP.jpg" alt="¿Quieres ser mi hijo? (2023)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fseptiembre%2FVer%20%C2%BFQuieres%20ser%20mi...%20hijo-%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 


    </a>




</ul>   
   

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://www.ecartelera.com/carteles/11500/11562/006.jpg" alt="
    La monja 2 (2023)" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('http://vod169.myworldtv.net:9090/vod/mwtv/movies/The%20Num%202%20720p%20Dual%202023.mp4?token=UyQpomRtneDv8ZoQodXnzw&exp=1702445236')"></li> 

    <li class="cursor-pointer"> <img  src="https://www.cinepremiere.com.mx/wp-content/uploads/2023/06/Indestructibles-4-Poster.jpg" alt="Los indestructibles 4 (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fseptiembre%2FVer%20Los%20indestructibles%204%20online%20HD%20-%20Cuevana%202.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500//vd8YdaH7dzeIMGTNwQinlSiA1gV.jpg" alt="Mini Espias: El armagedón (2023)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fseptiembre%2FVer%20Miniesp%C3%ADas-%20Armaged%C3%B3n%20online%20HD%20-%20Cuevana%202.mp4')"> </li> 


    </a>




</ul>   

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42401-631342-20230712030354.png" alt="
    Mision: Imposible - Sentencia mortal parte uno (2023) " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/mision-imposible-sentencia-mortal-parte-uno_202308/Misión_Imposible_-_Sentencia_mortal_parte_uno.mp4')"></li> 

    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/A_travaes_del_mar-918065562-large.jpg" alt="A través del mar (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjulio%2FVer%20Misi%C3%B3n-%20Imposible%20-%20Sentencia%20mortal%20parte%20uno%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://www.ibs.it/images/9788891586049_0_536_0_75.jpg" alt=Ladybug and Cat Noir Awakening (2023)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://tvinnov.online/CINECAN/Ladybug.and.Cat.Noir.Awakening.2023/Ladybug.and.Cat.Noir.Awakening.2023.HDCAM.c1nem4..mp4')"> </li> 


    </a>




</ul>   

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/qmW8mPhcdOP3v36Gz8WEeDdewFN.jpg" alt="
    La Dama del Silencio: El caso Mataviejitas " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_20230805_20230805_2010/01.mp4')"></li> 

    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/Blood-252460606-large.jpg" alt="Blood (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/01_20230811_20230811_1800/01.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqoRrig1CMfY9RfzWxEdEzzl9KhyggVp2gxLO7Rc35owV4qxut56pR3dOCcd5atFw2nmY&usqp=CAU" alt="Resident Evil: Isla de la Muerte (2023)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230801_20230801_2328/01.mp4')"> </li> 


    </a>




</ul>

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/original/682SlpyatX0HjgjQPOKu0VwpKfl.jpg" alt="
    Agente Stone " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fagosto%2FWatch%20Blue%20Beetle%202023%201080p%20CAMRip%20LAT%20DUB%20mp4.mp4')"></li> 

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/516MFML05KWiPfiQNAsVCGMySc7.jpg" alt="The Seven Deadly Sins: El rencor de Edimburgo 2" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/01_20230808_20230808_2003/01.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/41815-771272-20230404124232.jpg" alt="Los tres mosqueteros: D’Artagnan" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230805_20230805_2028/01.mp4')"> </li> 


    </a>




</ul>   


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500//gvtMN1IWBqqPYYlPy2saWaPbmP9.jpg" alt="
    Blue Beetle " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fagosto%2FWatch%20Blue%20Beetle%202023%201080p%20CAMRip%20LAT%20DUB%20mp4.mp4')"></li> 

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg" alt="Gran Turismo" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fagosto%2FVer%20Gran%20Turismo-%20De%20jugador%20a%20corredor%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://cloudfront-us-east-1.images.arcpublishing.com/abccolor/4DTKOZQAHFCXNL7ASC5IVS5YCE.webp" alt="Liga de la justicia: mundo de guerra" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://grrfff66me7t.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fagosto%2FVer%20Tortugas%20Ninja-%20Caos%20mutante%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol%20CAM.mp4')"> </li> 


    </a>




</ul>    

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42650-169278-20230602013018.jpg" alt="
    MEGALODÓN 2: EL GRAN ABISMO " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_20230804_20230804_1500/01.mp4')"></li> 

    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/Mansiaon_encantada-851868317-large.jpg" alt="Mansión Encantada" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://main.cinedecalidad.xyz/mexicanas/mansionencantada.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500//qmevjlNDaWoEughGlXFWHbQ4TaR.jpg" alt="Liga de la justicia: mundo de guerra" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230801_20230801_2043/01.mp4')"> </li> 


    </a>




</ul>    

    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" alt="
    Oppenheimer " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl(' https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrfff66me7t/b/Cubojoselyn/o/reset%2Fpeliculas%2Fjulio%2FVer%20Oppenheimer-%20el%20dilema%20de%20la%20bomba%20at%C3%B3mica%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4')"></li> 

    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" alt="Barbie (2023)" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/01_20230722_20230722_1543/01.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg" alt="Insidious: La puerta roja" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://main.cinedecalidad.xyz/mexicanas/insidiousroja.mp4')"> </li> 


    </a>




</ul>       


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/5dliMQ2ODbGNoq0hlefdnuXQxMw.jpg" alt="
    Unos suegros de armas tomar " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_20230718_20230718_1833/01.mp4')"></li> 

    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/Anna_Nicole_Smith_Tau_no_me_conoces-396663730-large.jpg" alt="nna Nicole Smith: Tú no me conoces" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/01_20230520_20230520_2211/01.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500/2BwerQH4tZvHU6zUlC77aDw7pLt.jpg" alt="El frío en los huesos" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230718_20230718_2134/01.mp4')"> </li> 


    </a>




</ul>    


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdjMbKlNLq7dHJ1bHnFL9Fc5uU_uaDn7sSJT_7qZAxYRb-OvlPIX-S87nJe6dJom6a570xQ4aOTRQfMx69ivcgwqR8TGkqwQKJQmckkFkimwpTrlftL1wqawRQJcUB3D8jpt92VV2IGHYx2lhLI7x7jedKOdlzJPGDhI_7cfSv1HYdilAMhoUzzZQzpycf/s791/355095296_6236710693044644_3531237923405411584_n.jpg" alt="
    Indiana Jones dial del destino " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://tvinnov.online/CINECAN/ndiana%20Jones%20and%20the%20Dial%20of%20Destiny/ndiana%20Jones%20and%20the%20Dial%20of%20Destiny%20lat%20cam.mp4')"></li> 

    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42321-262149-20230616020218.jpg" alt="Krakens y Sirenas: Conoce a Los Gillman" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://tvinnov.online/CINECAN/Ruby%20Gillman%20Teenage%20Kraken/Ruby%20Gillman,%20Teenage%20Kraken%20LAT%20CAM.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/41816-371949-20230505020537.jpg" alt="Elementos" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/elementos_202306/EL-1080_PeliculasySeriesHD.mp4')"> </li> 


    </a>




</ul>

    
    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42099-134368-20230427103539.jpg" alt="
    Los caballeros del zodiaco " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Fmayooo%2FVer%20Los%20Caballeros%20del%20Zodiaco-%20Saint%20Seiya%20-%20El%20inicio%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/Culpa_maia-785263687-large.jpg" alt="Culpa mia" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/01_20230623_20230623_2005/01.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://static.cinepolis.com/img/peliculas/42459/1/1/42459.jpg" alt="Spider Man Across The Spider Verse(2023)" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://cdnst14.tokyvideo.com/videos/267/267927/mp4/34f477892eb6ccb82def0268c9303fcc9e85fa3dc52a3fea828877ff4d9b4021.mp4?secure=D2MqoKUPtE_iXLwvYjt2bQ%3D%3D%2C1701839153')"> </li> 


    </a>




</ul>

    
    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/Flash-205686824-mmed.jpg" alt="
    Flash " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_20230718_20230718_2038/01.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://i0.wp.com/cinemedios.com/wp-content/uploads/2023/05/misionderescate2_poster-1.jpg?w=210&h=310&ssl=1" alt="Misión de rescate 2" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Fjunn%2FVer%20Tyler%20Rake%202%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/42319-658122-20230428091407.jpg" alt="Demonio negro" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Fmayooo%2FVer%20Demonio%20negro%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4')"> </li> 


    </a>




</ul>    


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500//9YEGawvjaRgnyW6QVcUhFJPFDco.jpg" alt="
    Black Clover: La espada del rey mago " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_20230623_20230623_1910/01.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/u3M1bVxEbIe3BVkFJWwMi8DIea1.jpg" alt="Sustitutos" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/01_20230509_20230509/01.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500//3IhGkkalwXguTlceGSl8XUJZOVI.jpg" alt="Hynoptic" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Fmayooo%2FVer%20Hypnotic%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4')"> </li> 


    </a>




</ul>    


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHK8yn3u06A4VWfSFI3AywzAenBuxPJbmnw&s" alt="
    Transformers: el despertar de las bestias " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://main.cinedecalidad.xyz/mexicanas/TransformersDespertar.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500//jNO8smUkyNbL2t6HU6EBnJCSf6r.jpg" alt="Un Año Inolvidable – Verano 2023" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/01_20230609_20230609_2029/01.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500//gwVAb3hMYl5F68mvKGl2eqDOj0G.jpg" alt="Tin & Tina" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230602_20230602_2101/01.mp4')"> </li> 


    </a>




</ul>         


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500//ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg" alt="
    La sirenita " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Fmayooo%2FVer%20La%20sirenita%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/liLN69YgoovHVgmlHJ876PKi5Yi.jpg" alt="Ghosting" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/01_20230423/01.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500/y2d2SBqK33mGOG2CqAYMo3YbWE4.jpg" alt="El Club de los Asesinos" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230504_20230504_1804/01.mp4')"> </li> 


    </a>




</ul> 


<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
<li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/ogDXuVkO92GcETZfSofXXemw7gb.jpg" alt="
One Piece Film Red " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_(2023)0408_(2023)0408_1938/01.mp4')"> </li>


<li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/41150-106834-20221205043048.jpg" alt="Agente Fortune: El gran engaño" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/01_(2023)0409_(2023)0409_2310/01.mp4')"></li>





<li class="cursor-pointer"> <img src="https://cinembrollos.com/wp-content/uploads/2023/09/saw_x_ver5.jpg" alt="Saw X" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://dl.dropbox.com/scl/fi/7w27cklxw9ieg2izoom6z/S4WX.mp4?rlkey=6tt829to3rtb6puuvg380h7n6')"> </li> 


</a>




</ul> 


    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/78W8tIM3PgIO6OIMfugi6p1GHNT.jpg" alt="
    Black Knight " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_20230514_20230514_2127/01.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500//n8ZpMwYT02XjpQHpSxn1eJw5Zpz.jpg" alt="Crater" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/01_20230514_20230514_2220/01.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/41753-892183-20230217030119.jpg" alt="Sombras de un crimen" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230513/01.mp4')"> </li> 


    </a>




</ul> 


<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
<li class="cursor-pointer"> <img  src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/2023/5/w1280/1OJDfBoMXYrkSkLQOqtWD3bHnKX.jpg" alt="
Royalteen: La princesa Margrethe" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_20230514_20230514_2224/01.mp4')"> </li>


<li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/La_madre-219102487-large.jpg" alt="La madre" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/01_20230512_20230512_2326/01.mp4')"></li>





<li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/Renfield-758566468-large.jpg" alt="Renfield" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230504_20230504_1831/01.mp4')"> </li> 


</a>




</ul> 


<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500//9NXAlFEE7WDssbXSMgdacsUD58Y.jpg" alt="
    Peter pan & Wendy " class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_20230429_20230429/01.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/41961-584178-20230310125105.jpg" alt="El exorcista del Papa" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/01_20230504_20230504_1822/01.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/41760-508243-20230221105251.png" alt="Las Momias y El Anillo Perdido" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_(2023)0409_(2023)0409_2336/01.mp4')"> </li> 


    </a>




</ul>



    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/41749-830563-20230329061508.jpg" alt="
    Dungeons & Dragons: Honor entre ladrones" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_(2023)0408_(2023)0408_2027/01.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500//gbGHezV6yrhua0KfAgwrknSOiIY.jpg" alt="Supercell" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/01_20230422_20230422_1907/01.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFk8U65qN7m2RyjjzzF-IexAU0tLoP4k3XqrjXiTbkFfyA-HfV0dy-Abd7fl3K9XjX_L4&usqp=CAU" alt="Winnie the Pooh: Miel y Sangre" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_(2023)0409_(2023)0409_2336/01.mp4')"> </li> 


    </a>




</ul> 



    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://lumiere-a.akamaihd.net/v1/images/ant-man_and_the_wasp_quantumania_poster_2_la_6eea32a6.jpeg?region=0,0,743,1100" alt="
    Ant-Man and the Wasp: Quantumania" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://tgdownloads.dltelegram.workers.dev/1001886225227/2413')"> </li>


    <li class="cursor-pointer"> <img  src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ZX4JT7D7BJDJNIUZYUBD7EFKAU.jpg" alt="Creed III" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Ffeb%2FVer%20Creed%20III%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://editorial.aristeguinoticias.com/wp-content/uploads/2022/12/winnie-the-pooh-miel-y-sangre-poster-espanol-scaled.jpg" alt="Winnie the Pooh: Miel y Sangre" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230130_20230130_2128/01.mp4')"> </li> 


    </a>




</ul> 


<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://i.postimg.cc/rwKPZ2NF/evildead.jpg" alt="
    Evil Dead El despertar" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://tgdownloads.dltelegram.workers.dev/1001886225227/2324')"> </li>


    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/vc87upO8vcAGj9OmgH3AIz6ikKB.jpg" alt="Power Rangers: Ayer, hoy y siempre" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2023pelis%2Ffeb%2FVer%20Creed%20III%20online%20HD%20-%20Cuevana%202%20Espa%C3%B1ol.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500/tq8x5F17q95T1j0up5rpzXFAylN.jpg" alt="Embaucadores" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://image.tmdb.org/t/p/w500/tq8x5F17q95T1j0up5rpzXFAylN.jpg')"> </li> 


    </a>




</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://posterspy.com/wp-content/uploads/2022/12/Cocaine_Bear_Poster.jpg" alt="
    Bear Cocaine" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://tgdownloads.dltelegram.workers.dev/1001829780398/57009')"> </li>


    <li class="cursor-pointer"> <img  src="https://www.mubis.es/media/users/12828/309855/FB_IMG_1669667935584-original.jpg" alt="Llaman a la puerta" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/llaman-a-la-puerta_202302/Llaman a la puerta.ia.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500//oGHr8yUOXtVK0mGoZURZqqbwXXj.jpg" alt="Identidad desbloqueada" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230227_20230227_1914/01.mp4')"> </li> 


    </a>




</ul> 

<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://www.nextgame.es/wp-content/uploads/2022/10/Una-Boda-Explosiva-trailer.png" alt="Una boda Explosiva" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia804706.us.archive.org/13/items/b0d_45-pl0M0/b0d_45-pl0M0.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/33404.jpg" alt="Avatar: El Camino del Agua" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fdici%2FVer%20Avatar-%20El%20sentido%20del%20agua%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://i.ebayimg.com/images/g/mIgAAOSwUX5kZIV3/s-l400.jpg" alt="M3gan" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/m-333gan-dual-latino-ingles/M333gan DUAL(Latino-Inglés).mp4')"> </li> 


    </a>




</ul> 
    
    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/img/peliculas/41145/1/1/41145.jpg" alt="Vecino gruñon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia804707.us.archive.org/21/items/1-v-3c-1n-0-gru-n-0n/1_v3c1n0-gruN%CC%830n.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://es.web.img3.acsta.net/pictures/23/01/16/17/21/5753145.jpg" alt="El piloto" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801609.us.archive.org/20/items/3-l-p-1l-0-t-0/3L_P1l0-t0.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://es.web.img2.acsta.net/pictures/22/03/21/17/30/4116877.jpg" alt="
   Fresh" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia904706.us.archive.org/0/items/fr35h.lat/fr35h.lat.mp4')"> </li> 


    </a>




</ul>  



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500//gU4mmINWUF294Wzi8mqRvi6peMe.jpg" alt="Narvik" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_20230130_20230130_2041/01.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7f6Ya7WpgKXzR2Ha6WPJXnz1DQcjEg9egl6AfZlu-pZjUOC_eLtw8iPgnm06mCGx9Do&usqp=CAU" alt="Magic mike's last dance" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://tgdownloads.dltelegram.workers.dev/1001829780398/55685')"></li>
   




   <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500//abBDzmy35A3Nkupn6wK2DKyFamd.jpg" alt="Viking Wolf" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230207_20230207_2245/01.mp4')"> </li> 


    </a>




</ul> 



    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/2022/11/w1280/p6HNFpXiXIdyMRJTrfkgaPkFCK.jpg" alt="La bala perdida 2" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fnoviembr%2FVer%20Bala%20perdida%202%20(2022)%20Online%20%E2%80%93%20CineHDPlus.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/original/oJJWjiMKExSi241NpKUqVIxWfH6.jpg" alt="R.I.P.D 2: La rebelión de los condenados" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fnoviembr%2FVer%20R.I.P.D.%202-%20Rise%20of%20the%20Damned%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4')"></li>
   




   <li class="cursor-pointer"> <img src="https://static.cinepolis.com/img/peliculas/40276/1/1/40276.jpg" alt="La mujer rey" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://objectstorage.us-phoenix-1.oraclecloud.com/n/axa4wow3dcia/b/bucket-20201001-1658/o/2022pelicu%2Fnoviembr%2FVer%20La%20Mujer%20Rey%20Online%20Castellano%20Latino%20Subtitulada%20HD%20-%20HDFull.mp4')"> </li> 


    </a>




</ul> 




    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500//wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg"Babylon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/01_20230203_20230203/01.mp4')"> </li>


    <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/w500//wAkpPm3wcHRqZl8XjUI3Y2chYq2.jpg" alt="Teen Wolf" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230130_20230130_2101/01.mp4')"> </li> 
   




   <li class="cursor-pointer"> <img src="https://es.web.img2.acsta.net/pictures/23/01/30/15/11/2244443.jpg" alt="A todas partes" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://archive.org/download/01_20230217_20230217_1536/01.mp4')"> </li> 


    </a>




</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
<li class="cursor-pointer"> <img  src="https://i.ebayimg.com/images/g/9hMAAOSwYBFjGYkt/s-l1200.webp" alt="Black Adam" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('http://199.188.103.26/rombwgshgfhgdsjr/85455532potroxvix/Pel%C3%ADculas/Black%20Adam%202022latHD.mp4')"> </li>


<li class="cursor-pointer"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjhoia5od42mgyuWDf8IkBx2G8jFFbYYgQY8A8HihakBbCRPWm4A9s-8V_iQRzxc83Wc&usqp=CAU" alt="Mírame" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia804700.us.archive.org/13/items/m_1r4-m3/m_1r4-m3.mp4')"> </li> 





<li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/Till_Death_Hasta_que_la_muerte_nos_separe-895474287-large.jpg" alt="Hasta la muerte" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('http://proteiosmorelia.site/stuff/till.mp4')"> </li> 


</a>




</ul> 



    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li class="cursor-pointer"> <img  src="https://es.web.img3.acsta.net/pictures/21/07/22/15/42/2192431.jpg" alt="El tubo" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/tubo.mp4')"> </li>


    <li class="cursor-pointer"> <img src="https://image.tmdb.org/t/p/original/uESLvTixBpo6LE9RVZtRhwSdBDJ.jpg" alt="Dependientes 3" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/clerks3.mp4')"> </li>
   



    <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/Halloween_El_final-885815456-large.jpg" alt="Hallowen el final" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/halloween.mp4')"> </li> 





</ul> 


   
<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/deo_mun-579180002-mmed.jpg" alt="moon" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/cerveza.mp4')"> </li>


    <li class="cursor-pointer"> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Cyrano_poster.jpg/220px-Cyrano_poster.jpg" alt="Cyrano" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://casiano.store/stuff/cyrano.mp4')"> </li>
   



    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/39643-378416-20220708041757.jpg" alt="Mi dulce monstruo" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://casiano.store/stuff/dulce.mp4')"> </li> 

    <li class="cursor-pointer"><a href="#reproducir↑">  ► ↑ </a></li>
  




</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/Los_perdonados-711017451-large.jpg" alt="Los perdonados" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://casiano.store/stuff/forgiven.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/original/4KzGSEJvAszqJqfC0k4O7gRE1cS.jpg" alt="El mar del norte" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://polimor.club/movies/marnorte.mp4')"></li>
   


   <li class="cursor-pointer"> <img src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/2022/10/w1280/vYhPCfSDlLObeV5bUIkmeUyR4gl.jpg" alt="El extraño" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/extrano.mp4')"> </li> 




</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/39908-115310-20220812023302.jpg" alt="Érase Una Vez Un Genio" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.alianzajuridicainteramericana.com/movies/esperando.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://image.tmdb.org/t/p/w500/wDLthZ6Hgn8RY55p0bkcmLV4Nw6.jpg" alt="Fantasmas de guerra" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://www.alianzajuridicainteramericana.com/movies/war.mp4')"></li>
   



    <li class="cursor-pointer"> <img src="https://pecime.com.mx/wp-content/uploads/2022/09/3.-Emergencia-en-el-aire-714x1024.jpg" alt="Emergencia en el aire" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://casiano.store/stuff/emergenciabien.mp4')"> </li> 





</ul>



    <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/Pinocho-256590713-large.jpg" alt="Pinocho" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('http://proteiosmorelia.site/stuff/pinocho.mp4')"> </li>


    <li class="cursor-pointer"> <img src="https://es.web.img3.acsta.net/c_310_420/pictures/22/06/20/14/53/4061901.jpg" alt="La bestia" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://polimor.club/movies/bestia.mp4')"> </li>
   



    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/39753-784619-20220722063400.jpg" alt="
    Vértigo" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://polimor.club/movies/vertigo.mp4')"> </li> 

    
  




</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li class="cursor-pointer"> <img  src="https://es.web.img3.acsta.net/pictures/22/05/25/17/54/5230446.jpg" alt="Pig" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/pig.mp4')"> </li>


    <li class="cursor-pointer"> <img src="https://decine21.com/img/upload/obras/la-caida-46339/la-caida-46339-c.jpg" alt="La caída" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/caida.mp4')"> </li>
   



    <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/Medieval-943570499-large.jpg" alt="Medieval" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/medieval.mp4')"> </li> 

    
  




</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://images.justwatch.com/poster/300974125/s718/causeway.%7Bformat%7D" alt="Causeway" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/resurgir.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://notify.com.ar/sonidera/wp-content/uploads/sites/7/2022/09/Sonrie.jpg" alt="Sonríe" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/smile2.mp4')"></li>
   



    <li class="cursor-pointer"> <img src="https://static.cinepolis.com/resources/mx/movies/posters/414x603/39883-743882-20220812022834.jpg" alt="Pasaje al paraíso" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://www.colegiofederaldeperitos.org/stuff/viaje.mp4')"> </li> 

    <li class="cursor-pointer"><a href="#reproducir↑">  ► ↑ </a></li>




</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
    <li class="cursor-pointer"> <img  src="https://mx.web.img3.acsta.net/pictures/23/02/01/19/25/0306121.jpg" alt="Malcriados" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801603.us.archive.org/33/items/m-4l-c-r-14-2/M4l-c_r14-2.mp4')"> </li>


    <li class="cursor-pointer"> <img src="https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/432245/small_7c1513335e89b414939c6a26486f4117-994_poster.jpg" alt="¡Nop!" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801603.us.archive.org/33/items/m-4l-c-r-14-2/M4l-c_r14-2.mp4')"> </li>
   



    <li class="cursor-pointer"> <img src="https://culturizarte.cl/wp-content/uploads/2021/10/chernobil.jpg" alt="Chernóbil: La Película" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia802601.us.archive.org/3/items/ch-3rn-0/Ch3rn_0.mp4')"> </li> 

  




</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

       
    <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/Huesera-823576509-large.jpg" alt="Huesera" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia904706.us.archive.org/0/items/hu-3-53.r-4/Hu3_53.r4.mp4')"> </li>


    <li class="cursor-pointer"> <img  src="https://mx.web.img3.acsta.net/pictures/23/01/20/12/19/2283426.jpg" alt="Jung E" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia904705.us.archive.org/30/items/j-u-n-6-3/J_uN6_3.mp4')"></li>
   



    <li class="cursor-pointer"> <img src="https://www.ennetflix.mx/media/15/amor-al-cuadrado_81259382.jpg" alt="Amor al cuadrado" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://tgdownloads.dltelegram.workers.dev/1001886225227/2393')"> </li> 

    <li class="cursor-pointer"><a href="#reproducir↑">  ► ↑ </a></li>
        
    </a>




</ul>   


 
 <ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/bullet_train-757922812-large.jpg" alt="Tren bala" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801402.us.archive.org/4/items/tr_3n/b_ull3t.mp4')"> </li>

 
     <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/orphan_first_kill-880267341-large.jpg" alt="La Huérfana: el origen" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801508.us.archive.org/12/items/f-1r-5t-k-1ll/F1r5t_K1ll.mp4')"> </li>
    



     <li class="cursor-pointer"> <img src="https://lumiere-a.akamaihd.net/v1/images/depredador_la_presa_poster_2_496bbe49.jpeg?region=0,0,770,1100" alt="Depredador la presa" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601502.us.archive.org/31/items/p.R3_y/p.R3_y0k.mp4')"> </li> 
 
   

 


</ul> 



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li class="cursor-pointer"> <img  src="https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXND26B/image?locale=es-es&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg" alt="Tormenta infinita" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801507.us.archive.org/7/items/1nf-1n-1t-3.5t-0rm/1nf1n1t3.5t0rm.mp4')"> </li>

 
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/minions_the_rise_of_gru-608394212-large.jpg" alt="Minions: nace un villano" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia802505.us.archive.org/11/items/m-1n-1-0n-5/m-1n-1-0n-5.mp4')"></li>
    



     <li class="cursor-pointer"> <img src="https://lumiere-a.akamaihd.net/v1/images/p_243_ster_lightyear_9209f1b3.jpeg" alt="El Valet" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601505.us.archive.org/28/items/l-1-y-3.4-r/L1_y3.4R.mp4')"> </li> 
 
     <li class="cursor-pointer"><a href="#reproducir↑">  ► ↑ </a></li>

 
 

</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/iron_cross_the_road_to_normandy-587205455-large.jpg" alt="Cruz de Hierro: El camino a Normandía" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia801500.us.archive.org/2/items/1r-0n-cr-055/1r0n_Cr%20055.mp4')"> </li>

 
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/the_valet-243941141-large.jpg" alt="Chip y Dale: Al Rescate" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801406.us.archive.org/19/items/3-l-v-4-l-3-t/3L_v%204L3_t.mp4')"></li>
    



     <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/chip_n_dale_rescue_rangers-335785940-large.jpg" alt="moon" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601508.us.archive.org/20/items/ch-1-p-n/Ch_1P%20%27n%20.mp4')"> </li> 

 
 

</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li class="cursor-pointer"> <img  src="https://m.media-amazon.com/images/I/513XjcK7OmL._SY344_BO1,204,203,200_QL70_ML2_.jpg" alt="Red" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://archive.org/download/r-3dd-2022/R3dd2022.mp4')"> </li>

 
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/the_batman-449856406-large.jpg" alt="The Batman" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/b-4-t-m-4-n/B4%20t_m4N.mp4')"></li>
    



     <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/resident_evil_welcome_to_raccoon_city-764554100-large.jpg" alt="Resident Evil: Bienvenidos a Raccoon City" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601405.us.archive.org/23/items/rp-189-pr/RP189PR.mp4')"> </li>
     
     <li class="cursor-pointer"><a href="#reproducir↑">  ► ↑ </a></li>

 
 

</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li class="cursor-pointer"> <img  src="https://m.media-amazon.com/images/I/71iwxS0LgUS.jpg" alt="Hotel Transylvania: transformanía" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia601502.us.archive.org/17/items/0t-31tr-4n-51lv-4n-142022/0t31tr4n51lv4n142022.mp4')"> </li>

 
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/the_matrix_resurrections-864937945-large.jpg" alt="Matrix Resurrecciones" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia801406.us.archive.org/19/items/3-l-v-4-l-3-t/3L_v%204L3_t.mp4')"></li>
    



     <li class="cursor-pointer"> <img src="https://pics.filmaffinity.com/ghostbusters_afterlife-667822266-large.jpg" alt="Ghostbusters: el legado
     A 2021 ‧ Comedia/Fantasía ‧ 2h 4m
     " class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia601504.us.archive.org/31/items/c4s42021/c4s42021.mp4')"> </li> 

 
 

</ul>



<ul id="video_navigation" style="list-style-type: none; display: grid; grid-template-columns: repeat(3 , 1fr);">

        
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/marry_me-852565093-large.jpg" alt="Merry me" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia802508.us.archive.org/26/items/c-454-t-3-c-0nm-1-g-0/C454%20t3%20c0nm1%20g0.ia.mp4')"> </li>

 
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/ambulance-409574561-large.jpg" alt="Ambulancia" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://ia601400.us.archive.org/13/items/4m-bu-14nc-14/4mBu_14nc14.mp4')"></li>
    



     <li class="cursor-pointer"> <img src="https://static.cinepolis.com/img/peliculas/39361/1/1/39361.jpg" alt="Thor: Amor y trueno" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('https://ia801500.us.archive.org/3/items/t-h-0-r/T_h0-r.mp4')"> </li>

     <li class="cursor-pointer"> <img  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/086a3ff3-cfc9-4353-b023-f99822788b9a/df3v63t-c19e83aa-1008-4bed-a072-90b87e74aede.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4NmEzZmYzLWNmYzktNDM1My1iMDIzLWY5OTgyMjc4OGI5YVwvZGYzdjYzdC1jMTllODNhYS0xMDA4LTRiZWQtYTA3Mi05MGI4N2U3NGFlZGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.omw8Igy8csWoQHmfKpeWegP7FGMvOOVEDdNqNORCEJw" alt="Morbius" class="img_video_nav  img-thumbnail  w-50"  onclick="videoUrl('https://ia902507.us.archive.org/14/items/m-0r-b-1-u-5./M0r_b1%20u5..mp4')"> </li>

 
     <li class="cursor-pointer"> <img  src="https://pics.filmaffinity.com/Mortal_Kombat-143448809-large.jpg" alt="Mortal Combat" class="img_video_nav img-thumbnail   w-50" onclick="videoUrl('https://archive.org/download/m-0rt-4l-k-0mb-4/M0rt4l%20K0mb4%2B.mp4')"></li>
    



     <li class="cursor-pointer"> <img  src="https://mundosuperman.com/wp-content/uploads/2020/05/Snyder-Cut.jpg" alt="La Liga de la Justicia de Zack Snyder" class="img_video_nav img-thumbnail w-50" onclick="videoUrl('http://ia601506.us.archive.org/6/items/meme-5/jus.mp4')"> </li>
     
     <li class="cursor-pointer"><a href="#reproducir↑">  ► ↑ </a></li>

 

</ul>
</div>

     <section class="cuerpo">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <a href="#reproducir↑" class="float-pelis">
        <i class="fas fa-film my-float-pelis"></i>
        
`;
  }
}

customElements.define("menu-component", Menu);
