import styles from "../styles/SearchBar.css";


export default function SearchBar() {
    // var searchbar = document.getElementsByClassName("SearchBar");
    // searchbar.addEventListener("keyup", function(event) {
    //       // Number 13 is the "Enter" key on the keyboard
    //       if (event.keyCode === 13) {
    //         console.log("Enter pressed searchbar");
    //         // // Cancel the default action, if needed
    //         // event.preventDefault();
    //         // // Trigger the button element with a click
    //         // document.getElementById("myBtn").click();
    //       }
    //     });
    return (
        // potentially type text...
        <input type="search" id="search" placeholder="Search"/>
    )
  }
