export async function GET() {
    const Teams = [
        { id: 0, Picture: 'https://framerusercontent.com/images/8MuFJojYy41hr0U8SS8FoyoJI.png', Name: 'Philippe LeBlanc', Job: 'CEO & Owner' },
        { id: 1, Picture: 'https://framerusercontent.com/images/QNGvDPT19eI4BPXX0abIhp9I1M.png', Name: 'Rosaria Marine', Job: 'Head Sommelier' },
        { id: 2, Picture: 'https://framerusercontent.com/images/MNTgQ6LYPVgCiVKfKsaterYgOhU.png', Name: 'Isabella Martinez', Job: 'Head Pastry Chef' },
        { id: 3, Picture: 'https://framerusercontent.com/images/e1qLe6WOSas90kpXKRvvR5TDk.png', Name: 'John Smith', Job: 'Executive Chef' },
        { id: 4, Picture: 'https://framerusercontent.com/images/sVXomOPeomZyguryqKaoGMctfI.png', Name: 'Sophia Nguyen', Job: 'Restaurant Manager' },
        { id: 5, Picture: 'https://framerusercontent.com/images/lSnne0O0W3eivH9wK9PzHOvXCo.png', Name: 'David Johnson', Job: 'Head Pastry Chef' },
        { id: 6, Picture: 'https://framerusercontent.com/images/TBiyhwDOX2NDF1caJtsaqxagLM.png', Name: 'Daniel Lee', Job: 'Head Chef de Cuisine' },
        { id: 7, Picture: 'https://framerusercontent.com/images/AYHPhJe2wYjxiBuZyaS5JWgpyf4.png', Name: 'Olivia Smith', Job: 'Head Barista' },
        { id: 8, Picture: 'https://framerusercontent.com/images/CK6il39492lHSqP6TsHDCN6kkY.png', Name: 'Mario Rodriguez', Job: 'Junior Chef' }
    ]
    return Response.json(Teams)
}