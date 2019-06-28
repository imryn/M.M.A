
export class Movie {
    public title: string;
    public year: number;
    public imagePath: string;
    public summary: string;

    constructor(title: string, year: number, imagePath: string, summary: string) {
        this.title = title;
        this.year = year;
        this. imagePath = imagePath;
        this.summary = summary;
    }
}