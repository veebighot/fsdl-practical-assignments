document.getElementById('healthForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const activity = document.getElementById('activity').value;
    const diet = document.querySelector('input[name="diet"]:checked').value;
    const bmi = (weight / (((heightCm/100)) ** 2)).toFixed(1);
    let advice = "";
    let badgeClass = "";
    if (bmi < 18.5) {
        advice = "We recommend looking at our 'Slim Fit' or 'Relaxed' collections to add volume to your look.";
        badgeClass = "bg-warning text-dark";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        advice = "You have a balanced profile! Our 'Regular Fit' and 'Athletic Fit' would suit you perfectly.";
        badgeClass = "bg-success";
    } else {
        advice = "Focus on our 'Comfort' or 'Tailored' lines for the best silhouette.";
        badgeClass = "bg-danger";
    }
    document.getElementById('resultArea').style.display = "block";
    document.getElementById('bmiBadge').innerText = `BMI Score: ${bmi}`;
    document.getElementById('bmiBadge').className = `badge p-2 w-100 fs-6 ${badgeClass}`;
    document.getElementById('summaryText').innerHTML = `<strong>Hello, ${name}!</strong><br>We have sent a detailed plan to <strong>${email}</strong>.<br><br>Based on your <strong>${activity}</strong> lifestyle and <strong>${diet}</strong> diet, your body score is being processed.<br><br><em>Fashion Tip: ${advice}</em>`;
    window.scrollTo(0, document.body.scrollHeight);
});
