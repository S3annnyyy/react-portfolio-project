import Project1 from "../../assets/projectImages/project1.png";
import stock from "../../assets/projectImages/project2.png";
import googleApp from "../../assets/projectImages/googleIgnite.png";
import mask from "../../assets/projectImages/mask.gif";
import python from "../../assets/projectImages/python.png";
import dart from "../../assets/projectImages/dart.png";

export const projectData = [
    {
        id: 1,
        title: '"ACT" Mobile Application',
        description:  'A productivity mobile app developed during Google Ignite Hackathon to solve UN Sustainable development Goal #12: Responsible Consumption. [2nd place]',
        stack: `${dart}`,
        image: `${googleApp}`,
        urlLink: "https://github.com/jeremychow99/google-ignite-project"
    }, 
    {
        id: 2,
        title: 'Mask Detection model',
        description:  'Computer Vision model that detects people wearing/not wearing masks. Trained with 853 images using YOLOv5',
        stack: `${python}`,
        image: `${mask}`,
        urlLink: "https://towardsdatascience.com/mask-detection-using-yolov5-ae40979227a6"
    },
    {
        id: 3,
        title: 'Correlations between Reddit and Stocks',
        description:  'Finding correlations between Reddit posts on r/wallstreetbets with company share price',
        stack: `${python}`,
        image: `${stock}`,
        urlLink: "https://medium.com/analytics-vidhya/finding-correlations-between-reddit-and-the-stock-market-using-statistics-4926a25a386e"
    },
    {
        id: 4,
        title: 'Text Classification & Sentiment Analysis on r/SGExams',
        description:  'Unearthing Singaporean students sentiments by education level, using SVM, VADER Lexicons and PushShift API.',
        stack: `${python}`,
        image: `${Project1}`,
        urlLink: "https://towardsdatascience.com/text-classification-sentiment-analysis-on-r-sgexams-4ea341134fba"
    }
]