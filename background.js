chrome.commands.onCommand.addListener((command) => {

    console.log(`Command "${command}" triggered`);

    switch (command) {
        case "Next":
            chrome.tabs.query(
                { url: "https://*.tiktok.com/*" },
                (tabs) => {
                    console.log(tabs[0].id)
                    chrome.scripting.executeScript({
                        target: { tabId: tabs[0].id },
                        func: () => {
                            document.querySelector('button[data-e2e=arrow-right]').click()
                        }
                    });
                }
            )
            break;
        case "Previous":
            chrome.tabs.query(
                { url: "https://*.tiktok.com/*" },
                (tabs) => {
                    console.log(tabs[0].id)
                    chrome.scripting.executeScript({
                        target: { tabId: tabs[0].id },
                        func: () => {
                            document.querySelector('button[data-e2e=arrow-left]').click()
                        }
                    });
                }
            )
            break;
        case "Love":
            chrome.tabs.query(
                { url: "https://*.tiktok.com/*" },
                (tabs) => {
                    console.log(tabs[0].id)
                    chrome.scripting.executeScript({
                        target: { tabId: tabs[0].id },
                        func: () => {
                            document.querySelector('span[data-e2e=browse-like-icon]').parentElement.click()
                        }
                    });
                }
            )
            break;
        case "Play/Pause":
            chrome.tabs.query(
                { url: "https://*.tiktok.com/*" },
                (tabs) => {
                    console.log(tabs[0].id)
                    chrome.scripting.executeScript({
                        target: { tabId: tabs[0].id },
                        func: () => {
                            video = document.querySelector('video')
                            video.paused ? video.play() : video.pause()
                        }
                    });
                }
            )
            break;
        default:
        // code block
    }

});

