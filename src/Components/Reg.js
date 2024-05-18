import React from 'react';
import './reg.css';

export default function Registration() {
  return (
    <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-8 text-center">

        <div class="form-container">
          <div class="header">
            <div class="header-row">
              <div class="big-bold" id="price" data-amount-cents="15000">150€</div>
              <div class="small-light"> / PARTICIPANT</div>
            </div>
            <div class="header-row">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>

          <div class="flex-between">
            Participants:
            <div class="actions">
              <a class="btn round-bordered incrementer minus" data-offset="-1">-</a>
              <span id="counter" data-count="1">1</span>
              <a href="#" class="btn round-bordered incrementer" data-offset="1">+</a>
            </div>
          </div>

          <form>
            <input type="number" value="15000" disabled class="form-control" id="price-input" name="price-cents" />
            <input type="submit" value="Pay 150€" class="btn btn-primary" id="submit" />
          </form>
        

      </div>
    </div>
  </div>

  <script src="main.js"></script>
  </div>
  );
  }