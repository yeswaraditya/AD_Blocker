document.addEventListener('DOMContentLoaded', function () {
    var adBlockerCheckbox = document.getElementById('adBlockerCheckbox');

    adBlockerCheckbox.addEventListener('change', function () {
        // Toggle ad blocking feature based on checkbox state
        if (adBlockerCheckbox.checked) {
            // Enable ad blocking
            // Apply rules from JSON when the button is checked
            applyRules();
        } else {
            // Disable ad blocking
            // Reset ad blocking rules when the button is unchecked
            resetRules();
        }
    });
});

function applyRules() {
    // Read the JSON rules file asynchronously
    fetch('rules.json')
        .then(response => response.json())
        .then(rules => {
            // Apply each rule
            rules.forEach(rule => {
                chrome.declarativeNetRequest.updateDynamicRules({
                    removeRuleIds: [rule.id],
                    addRules: [rule]
                });
            });
        })
        .catch(error => {
            console.error('Error applying rules:', error);
        });
}

function resetRules() {
    // Reset rules to empty array to disable ad blocking
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [],
        addRules: []
    });
}
