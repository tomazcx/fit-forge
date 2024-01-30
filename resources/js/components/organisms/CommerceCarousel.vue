<template>
    <section class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
            <div class="w-full h-[600px]">
                <img src="../../assets/carousel/img-1.jpg" class="w-full object-containt" />
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">❮</a>
                <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
            <div class="w-full h-[600px]">
                <img src="../../assets/carousel/img-2.jpg" class="w-full object-containt" />
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
            <div class="w-full h-[600px]">
                <img src="../../assets/carousel/img-3.jpg" class="w-full object-containt" />
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">❮</a>
                <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
        </div>
    </section>
</template>
