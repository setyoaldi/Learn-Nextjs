import axios from 'axios'

export default async function handler(req: any, res: any) {
    if (req.method === 'GET') {
        var opt = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news',
            params: { safeSearch: 'Off', textFormat: 'Raw' },
            header: {
                'x-bingapis-sdk': 'true',
                'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
                'x-rapidapi-key': process.env.NEXT_PUBLIC_BING_NEWS_API_KEY
            }
        }
        axios
            .request(opt)
            .then(function (response) {
                const { data } = response;
                const { value } = data;
                res.status(200).json(value);
            })
            .catch(function (error) {
                console.error(error);
            });
    } else {
        res.status(400);
    }
}

export async function getNewsData(): Promise<any> {
    const apiKey = 'd0183aafecmshd9603e4986e7215p11218ejsn59e80080f369';
    const url = `https://bing-news-search1.p.rapidapi.com/news`;

    try {
        const response = await axios.get(url, {
            headers: {
                'x-bingapis-sdk': 'true',
                'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
                'x-rapidapi-key': apiKey
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching news data:', error);
        throw new Error('Failed to fetch news data');
    }
}
