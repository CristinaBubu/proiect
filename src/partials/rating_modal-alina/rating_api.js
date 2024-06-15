import axios from 'axios';
import Notiflix from 'notiflix';


const ratingBackdrop = document.querySelector('.rating-backdrop');
 class addARating {
  constructor() {
    this.id = '';
    this.inputValue = '';
    this.ratingValue = 1;
  }

async addRating() {
    try {
      const URL = `https://tasty-treats-backend.p.goit.global/api/recipes/${this.id}/rating`;

      const obj = {
        rate: this.ratingValue,
        email: this.inputValue,
      };

      const responseFromRating = await axios.patch(URL, obj);

      Notiflix.Report.success(
        'Succes',
        'Your rating was successfully added'
      );
    
    } catch (err) {
      if (err.response.status === 409) {
        Notiflix.Report.failure(
          'We are sorry',
          'You have already rated this recipe',
        );
      }
      if (err.response.status === 400) {
        Notiflix.Report.failure(
          'We are sorry',
          'An error occured, please try again',
        );
      }
      ratingBackdrop.classList.remove('visible');
    }
  }

  setRatingValue(rating) {
    this.ratingValue = Number(rating);
  }

  setInpValue(inpValue) {
    this.inputValue = inpValue;
  }
  setId(id) {
    this.id = id;
  }
};

export default addARating;