// document.addEventListener('DOMContentLoaded', function () {
//     var adBlockerCheckbox = document.getElementById('adBlockerCheckbox');

//     // Function to toggle ad blocking when checkbox is clicked
//     function toggleAdBlocking() {
//         if (adBlockerCheckbox.checked) {
//             // Enable ad blocking
//             applyRules();
//         } else {
//             // Disable ad blocking
//             resetRules();
//         }
//     }

//     // Apply ad blocking rules when checkbox is clicked
//     adBlockerCheckbox.addEventListener('change', toggleAdBlocking);
// });

// function applyRules() {
//     fetch('rules.json')
//         .then(response => response.json())
//         .then(rules => {
//             chrome.declarativeNetRequest.updateDynamicRules({
//                 removeRuleIds: [],
//                 addRules: rules
//             });
//         })
//         .catch(error => {
//             console.error('Error applying rules:', error);
//         });
// }

// function resetRules() {
//     chrome.declarativeNetRequest.updateDynamicRules({
//         removeRuleIds: [],
//         addRules: []
//     });
// }
