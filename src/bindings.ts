import $ from "jquery"

export function enable(): void {
    $(window).on("keypress", (e) => {
        switch (e.key.toUpperCase()) {
            case "P":
            case "A":
                window.location.assign(`/${e.key.toUpperCase()}`);
                break;
            case "H":
                window.location.assign("/")
        }
        e.preventDefault();
    })
}
