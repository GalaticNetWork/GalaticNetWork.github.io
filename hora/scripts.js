document.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('time');
    const audioPlayer = document.getElementById('audioPlayer');

    async function fetchAudioData() {
        const response = await fetch('audioData.json');
        return await response.json();
    }

    function playAudio(hour, minute, audioData) {
        const hourAudio = new Audio(audioData.hours[hour]);
        const minuteAudio = new Audio(audioData.minutes[minute]);

        hourAudio.play();
        hourAudio.onended = () => {
            minuteAudio.play();
        };
    }

    function updateTime(audioData) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

        if (seconds === '00') {
            playAudio(hours, minutes, audioData);
        }
    }

    fetchAudioData().then(audioData => {
        setInterval(() => updateTime(audioData), 1000);
    });
});
