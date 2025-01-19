document.getElementById('bmi-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const feet = parseFloat(document.getElementById('feet').value);
  const inches = parseFloat(document.getElementById('inches').value);
  
  if (!weight || !feet || !inches || weight <= 0 || feet < 0 || inches < 0) {
    document.getElementById('result').innerHTML = 'Please enter valid values.';
    return;
  }

  const heightInMeters = ((feet * 12) + inches) * 0.0254; // Convert height to meters

  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }

  document.getElementById('result').innerHTML = `
    Your BMI is <strong>${bmi}</strong>. <br>
    Category: <strong>${category}</strong>.
  `;
});
