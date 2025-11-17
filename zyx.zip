// ==UserScript==
// @name         WHOIS State Watcher
// @namespace    https://github.com/NikoboiNFTB
// @version      1.1
// @author       Nikoboi
// @description  Monitors WHOIS registrant state and notifies when it changes.
// @icon         https://www.whois.com/images/favicon.ico
// @match        https://www.whois.com/whois/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const CHECK_INTERVAL_MS = 60000; // 60 seconds
    let lastNotified = 0;

    function getStateValue() {
        const registrantBlock = [...document.querySelectorAll('.df-block')]
            .find(block =>
                block.querySelector('.df-heading') &&
                block.querySelector('.df-heading').textContent.includes('Registrant Contact')
            );

        if (!registrantBlock) return null;

        const stateRow = registrantBlock.querySelectorAll('.df-row')[0];
        if (!stateRow) return null;

        return stateRow.querySelector('.df-value')?.textContent.trim() || null;
    }

    function scanState() {
        const state = getStateValue();
        if (!state) return;

        if (state === "Pietarsaari") {
            location.reload();
        }

        if (state === "Ostrobothnia") {
            const now = Date.now();
            if (now - lastNotified >= CHECK_INTERVAL_MS) {
                if (Notification.permission === "granted") {
                    new Notification("WHOIS updated", {
                        body: "State is now Ostrobothnia."
                    });
                } else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then(p => {
                        if (p === "granted") {
                            new Notification("WHOIS updated", {
                                body: "State is now Ostrobothnia."
                            });
                        }
                    });
                }
                lastNotified = now;
            }
        }
    }

    // Wait 60 seconds before the first check
    setTimeout(() => {
        scanState();
        setInterval(scanState, CHECK_INTERVAL_MS);
    }, CHECK_INTERVAL_MS);
})();
