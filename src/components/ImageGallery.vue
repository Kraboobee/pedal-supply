<template>
  <div class="pedal-images">
    <div class="main-image">
      <img 
        :src="currentImage.src" 
        :alt="currentImage.alt"
        class="main-img"
      />
    </div>
    
    <div v-if="images.length > 1" class="thumbnail-grid">
      <img 
        v-for="(image, index) in images"
        :key="index"
        :src="image.thumbnail"
        :alt="image.alt"
        :class="['thumbnail', { active: currentIndex === index }]"
        @click="setCurrentImage(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface ImageData {
  src: string
  thumbnail: string
  alt: string
}

interface Props {
  images: ImageData[]
  title: string
}

const props = defineProps<Props>()

const currentIndex = ref(0)

const currentImage = computed(() => props.images[currentIndex.value])

const setCurrentImage = (index: number) => {
  currentIndex.value = index
}
</script>

<style scoped>
.pedal-images {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.main-image {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  aspect-ratio: 4/3;
}

.main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.main-image:hover .main-img {
  transform: scale(1.05);
}

.thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  max-width: 100%;
}

.thumbnail {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  background: #f8fafc;
}

.thumbnail:hover {
  border-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.thumbnail.active {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

@media (max-width: 768px) {
  .thumbnail-grid {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 0.75rem;
  }
  
  .thumbnail {
    height: 120px;
  }
}

@media (max-width: 480px) {
  .thumbnail-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
