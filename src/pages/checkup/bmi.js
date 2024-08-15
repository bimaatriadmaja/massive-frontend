import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./BmiCalculator.css";

function BmiCalculator() {
  const [beratBadan, setBeratBadan] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [gender, setGender] = useState('male');
  const navigate = useNavigate();

  const hitungBmi = () => {
    const berat = parseFloat(beratBadan);
    const tinggiMeter = parseFloat(tinggi) / 100; // Konversi tinggi dari cm ke meter
    const bmi = berat / (tinggiMeter ** 2);

    let klasifikasi = '';
    let warnaKlasifikasi = '';
    if (bmi < 18.5) {
      klasifikasi = "Underweight";
      warnaKlasifikasi = "blue";
    } else if (18.5 <= bmi && bmi < 24.9) {
      klasifikasi = "Normal";
      warnaKlasifikasi = "green";
    } else if (25 <= bmi && bmi < 29.9) {
      klasifikasi = "Overweight";
      warnaKlasifikasi = "yellow";
    } else {
      klasifikasi = "Obesity";
      warnaKlasifikasi = "red";
    }

    // Navigasi ke halaman hasil sesuai gender
    if (gender === 'male') {
      navigate('/result', { state: { bmi: bmi.toFixed(2), klasifikasi, warnaKlasifikasi } });
    } else {
      navigate('/resultcewe', { state: { bmi: bmi.toFixed(2), klasifikasi, warnaKlasifikasi } });
    }
  };

  return (
    <div className="bmi-container" data-aos="fade-up" data-aos-duration="1000">
  <section className="bmi-form-wrapper">
    <form className="bmi-form" data-aos="fade-right" data-aos-duration="1000">
      <h1 className="bmi-title">BMI Calculator</h1>
      <div className="bmi-input-group">
        <input
          type="number"
          value={tinggi}
          onChange={(e) => setTinggi(e.target.value)}
          className="bmi-input"
          style={{ width: '300px' }} // Lebar disamakan
          placeholder="Tinggi Badan (cm)"
          data-aos="zoom-in"
          data-aos-duration="800"
        />
      </div>
      <div className="bmi-input-group">
        <input
          type="number"
          value={beratBadan}
          onChange={(e) => setBeratBadan(e.target.value)}
          className="bmi-input"
          style={{ width: '300px' }} // Lebar disamakan
          placeholder="Berat Badan (kg)"
          data-aos="zoom-in"
          data-aos-duration="800"
        />
      </div>
      <div className="bmi-gender-container" data-aos="fade-left" data-aos-duration="800">
        <div className="bmi-gender-option">
          <input className='radio-bmi'
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={() => setGender('male')}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="bmi-gender-option">
          <input className='radio-bmi'
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={() => setGender('female')}
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <button onClick={hitungBmi} className="bmi-button" style={{ width: '300px', alignSelf: 'center' }} data-aos="zoom-in" data-aos-duration="800">Confirm</button>
    </form>
  </section>
  <article data-aos="fade-up" data-aos-duration="1000">
    <h2 className="bmi-bmi-title">Body Mass Index</h2>
    <p className="bmi-description">
      Body Mass Index is a method used to evaluate a person's weight status based on their height and weight.
      This is a simple measurement often used by medical professionals to classify a person as underweight,
      normal, overweight, or obese.
    </p>
  </article>
</div>

  );
}

export default BmiCalculator;
