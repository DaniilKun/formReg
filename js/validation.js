let rule = false;

      const errorPop = document.querySelectorAll('.errorPop');

      const infoToggle = document.getElementById('infoToggle');
      const infoContainer = document.querySelector('.info');
      const ruleLabel = document.getElementById('ruleLabel');
      const ruleCheckbox = document.getElementById('rule');
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirmPassword');
      const phoneInput = document.getElementById('phone');

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const passwordError = document.getElementById('passwordError');
      const confirmPasswordError = document.getElementById('confirmPasswordError');
      const phoneError = document.getElementById('phoneError');

      const callRadio = document.getElementById('call');
      const messageRadio = document.getElementById('message');

      Inputmask({ mask: '+7 (999) 999-99-99' }).mask(phoneInput);

      ruleLabel.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращение действия по умолчанию (активации checkbox)
      });

      const successMessage = document.getElementById('successMessage');


      const validateForm = () => {
        const phonePattern = /^(\+7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;

        const name = nameInput.value;
        const phone = phoneInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (!phonePattern.test(phone)) {
          phoneError.textContent = 'Введите корректный номер телефона';
          phoneInput.classList.add('error');
          phoneError.style.display = 'block';
        } else {
          // скрыть h2
          phoneError.style.display = 'none';
        }

        if (name.trim() === '') {
          nameError.textContent = 'Поле "Имя" обязательно для заполнения';
          nameInput.classList.add('error');
          nameError.style.display = 'block';
        } else {
          // скрыть h2
          nameError.style.display = 'none';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          emailError.textContent = 'Введите корректный адрес электронной почты';
          emailInput.classList.add('error');
          emailError.style.display = 'block';
        } else {
          // скрыть h2
          emailError.style.display = 'none';
        }

        if (password.length < 6) {
          passwordError.textContent = "Поле 'Пароль' должно содержать не менее 6 символов";
          passwordInput.classList.add('error');
          passwordError.style.display = 'block';
        } else {
          // скрыть h2
          passwordError.style.display = 'none';
        }

        if (password !== confirmPassword) {
          confirmPasswordError.textContent = 'Пароли не совпадают';
          confirmPasswordInput.classList.add('error');
          confirmPasswordError.style.display = 'block';

        } else {
          // скрыть h2
          confirmPasswordError.style.display = 'none';
        }

        if (!rule) {
          ruleCheckbox.classList.add('error');
        }

        return (
          phonePattern.test(phone) &&
          name !== '' &&
          emailRegex.test(email) &&
          password.length >= 6 &&
          password === confirmPassword &&
          ruleCheckbox.checked
        );
      };

      const sendForm = () => {
        const isValid = validateForm();

        if (isValid) {
          successMessage.style.display = 'block';
          console.log('valid');
        } else {
          successMessage.style.display = 'none';
          console.log('invalid');
        }
      };