import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inicioepi',
  templateUrl: './inicioepi.component.html',
  styleUrls: ['./inicioepi.component.css']
})
export class InicioepiComponent implements AfterViewInit{
  currentIndex = 0;

  ngAfterViewInit() {
    this.showSlide(this.currentIndex);
    this.startAutoSlide();
  }

  changeSlide(n: number) {
    this.currentIndex += n;
    const slides = document.querySelectorAll('.carousel-slide');
    if (this.currentIndex >= slides.length) {
      this.currentIndex = 0;
    } else if (this.currentIndex < 0) {
      this.currentIndex = slides.length - 1;
    }
    this.showSlide(this.currentIndex);
  }

  currentSlide(index: number) {
    this.currentIndex = index;
    this.showSlide(this.currentIndex);
  }

  showSlide(index: number) {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    carousel.style.transform = `translateX(-${index * 100}%)`;
    this.updateIndicators(index);
  }

  updateIndicators(index: number) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  startAutoSlide() {
    setInterval(() => {
      this.changeSlide(1);
    }, 5000); // Cambia de imagen cada 5 segundos
  }
}
