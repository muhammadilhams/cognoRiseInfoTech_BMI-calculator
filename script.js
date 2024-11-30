document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dikirim
    calculateBMI(); // Panggil fungsi perhitungan
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const resultElement = document.getElementById('result');

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        resultElement.innerHTML = "Please enter valid positive values!";
        resultElement.style.display = "block"; // Tampilkan pesan kesalahan
        return;
    }

    // Konversi tinggi dari cm ke meter
    const height = heightCm / 100;

    // Rumus BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Kategori BMI
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Tampilkan hasil
    resultElement.innerHTML = `Your BMI is ${bmi} (${category})`;
    resultElement.style.display = "block"; // Tampilkan hasil
}
