document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('event-list');

    fetch('http://35.154.173.188:8000/api/getEventList')
        .then(response => response.json())
        .then(data => {
            const events = data.data.events;
            events.forEach(event => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `video.html?event_id=${event.event_id}`;
                link.textContent = event.name;
                listItem.appendChild(link);
                eventList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching event data:', error));
});