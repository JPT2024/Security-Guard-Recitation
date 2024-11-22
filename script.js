<script>
    function redirectWithTransition(page) {
        var titleElement = document.getElementById(page);
        titleElement.classList.add('fade-out');

        setTimeout(function() {
            const pages = {
                'general-orders': 'general-orders.html',
                'padpao': 'padpao.html',
                'sosia': 'sosia.html',
                'ra11917': 'ra11917.html',
                'security': 'security.html',
                'typesofbarriers': 'typesofbarriers.html',
                'cardinalrulesofgunsafety': 'cardinalrulesofgunsafety.html',
                'firstaid': 'firstaid.html',
                'fireextinguisher': 'fireextinguisher.html',
                'mission-and-vision': 'missionandvision.html',
                'core-values': 'corevalues.html',
                // Path to the new page, adjust this as needed
                '5w1h': 'pages/5w1h.html'  // Ensure this is correct
            };

            if (pages[page]) {
                window.location.href = pages[page];
            } else {
                console.error("Page not found: " + page);
            }
        }, 300);
    }
</script>
