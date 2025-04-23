async function loadAndDetect() {
    const imageInput = document.getElementById('imageInput');
    const image = document.getElementById('image');
    const canvas = document.getElementById('canvas');
    const output = document.getElementById('output');
    const status = document.getElementById('status');

    // Show status message
    const showStatus = (message) => {
        status.textContent = message;
        status.classList.add('active');
    };

    // Hide status message
    const hideStatus = () => {
        status.classList.remove('active');
    };

    // Load model initially
    showStatus('Loading model...');
    const model = await cocoSsd.load();
    hideStatus();

    imageInput.addEventListener('change', async () => {
        const file = imageInput.files[0];
        if (!file) return;

        // Show image loading status
        showStatus('Loading image...');
        image.src = URL.createObjectURL(file);

        image.onload = async () => {
            // Show analysis status
            showStatus('Analyzing image...');

            // Detect objects
            const predictions = await model.detect(image);

            // Draw on canvas
            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0);
            ctx.font = '16px Arial';
            ctx.lineWidth = 2;
            predictions.forEach(prediction => {
                const [x, y, width, height] = prediction.bbox;
                ctx.strokeStyle = '#007bff';
                ctx.strokeRect(x, y, width, height);
                ctx.fillStyle = '#007bff';
                ctx.fillText(
                    `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
                    x, y > 10 ? y - 5 : y + 15
                );
            });

            // Display predictions as text
            output.innerText = predictions.length
                ? predictions.map(p => `${p.class}: ${Math.round(p.score * 100)}%`).join('\n')
                : 'No objects detected';

            // Hide status
            hideStatus();
        };
    });
}

// Run on page load
loadAndDetect();