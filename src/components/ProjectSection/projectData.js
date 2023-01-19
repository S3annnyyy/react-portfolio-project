import Project1 from "../../assets/projectImages/project1.png";
import stock from "../../assets/projectImages/project2.png";
import googleApp from "../../assets/projectImages/googleIgnite.png";

export const projectData = [
    {
        id: 1,
        title: '"ACT" Mobile Application',
        description:  'A productivity mobile app to solve UN Sustainable development Goal #12: Responsible Consumption',
        stack: "Python",
        image: `${googleApp}`,
        urlLink: "https://github.com/jeremychow99/google-ignite-project"
    }, 
    {
        id: 2,
        title: 'Mask Detection model',
        description:  'Computer Vision model that detects people wearing/not wearing masks. Trained with 853 images',
        stack: "Python",
        image: `${Project1}`,
        urlLink: "https://towardsdatascience.com/mask-detection-using-yolov5-ae40979227a6"
    },
    {
        id: 3,
        title: 'Correlations between Reddit and Stocks',
        description:  'Project Description bla bla ba',
        stack: "Python",
        image: `${stock}`,
        urlLink: "https://medium.com/analytics-vidhya/finding-correlations-between-reddit-and-the-stock-market-using-statistics-4926a25a386e"
    },
    {
        id: 4,
        title: 'Text Classification & Sentiment Analysis on r/SGExams',
        description:  'Project Description bla bla ba',
        stack: "Python",
        image: `${Project1}`,
        urlLink: "https://towardsdatascience.com/text-classification-sentiment-analysis-on-r-sgexams-4ea341134fba"
    },
    {
        id: 5,
        title: 'Singapore Covid-19 Web Tracker ',
        description:  'Project Description #TODO',
        stack: "#TODO",
        image: `${Project1}`,
        urlLink: "https://github.com/S3annnyyy/Covid-19-Tracker"
    }
]