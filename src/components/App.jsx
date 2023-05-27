import { Component } from "react"; 
import { SearchBar } from "./Gallery/Gallery/Searchbar/Searchbar";

export class App extends Component{
  state = {
    images: [],
    searchQuery: '',
  }
  
 // Якщо оновився стейт рендеримо картинки
  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      console.log("blabla");
    }
  }

   // При сабміті форми приймає значення інпуту і скидає images та page
  handleSubmitSearchQuery = searchQuery => {
    this.setState({ images: [], searchQuery, page: 1 });
  };

  render() {
    
    return (
    <div>
        <SearchBar onSubmit={this.handleSubmitSearchQuery} />
    </div>
  );
};

  }
  
  
 