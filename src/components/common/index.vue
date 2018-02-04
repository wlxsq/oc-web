<template>
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel">
            	<img src="@/assets/logo.png">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
            	<img src="@/assets/logo.png">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
            	<img src="@/assets/logo.png">
            </div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>
