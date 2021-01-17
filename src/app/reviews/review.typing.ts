export interface Review {
    byline: string,
    critics_pick: number,
    date_updated: string,
    display_title: string,
    headline: string,
    link: {type: string, url: string, suggested_link_text: string},
    mpaa_rating: string,
    multimedia: {type: string, src: string, width: number, height: number},
    opening_date: string
    publication_date: string
    summary_short: string
}