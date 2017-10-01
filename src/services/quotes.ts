import { Quote } from '../data/quote.interface'

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addToFavorites(quote:Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeFromFavorites(quote:Quote){
        const pos = this.favoriteQuotes.findIndex((q: Quote) => {
            return q.id == quote.id;
        });
        this.favoriteQuotes.splice(pos, 1);
        console.log(this.favoriteQuotes);
    }

    getFavorites(){
        return this.favoriteQuotes.slice();
    }
}