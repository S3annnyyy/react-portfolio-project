import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';

export const workExperience = [
    {
        id: 1,
        title: 'Risk Insights Analyst Intern',
        company: "Tiktok, ByteDance",
        points: [
            "Ongoing"
        ],
        contentStyle: { background: '#1d1836', color: '#fff' },
        contentArrowStyle: { borderRight: '7px solid  #232631' },
        date: "May 2023 - present",
        iconStyle: { background: '#1d1836', color: '#fff' },
        icon: <FontAwesomeIcon icon={faTiktok} />
    }, 
    {
        id: 2,
        title: 'Commercial Analyst Intern',
        company: "Foodpanda, DeliveryHero",
        points: [
            "Adviced the commercial team in category trends and distribution gaps; drove the creation of an interactive dashboard to help with insights and analysis for category market share, basket penetration, customer penetration and product distribution dashboard(ND, PCV, ACV, SPPD)",
            "Adviced the commercial team and pandamart suppliers in optimizing promotions via a Market Basket Analysis using Pyspark framework (FP-growth algorithm) to identify and provide key insights to customer buying patterns across all categories",
            "Analyzed monthly promotions and designed a forecasting framework to help the commercial team optimize promotion strategy and supplier funding",
            "Team leader for Foodpanda's hackathon challenge (Overall champion). Proposed algorithm that segments sales of goods into selling velocity to then be further segregated to maximise picker and prep time efficiency",
            "Led recurring consultative sessions to help address business issues via dashboards using Google Datastudio & BigQuery",
            "Performed analysis for campaigns/promotions/experiments to understand better on promotion mechanics and sales performance"
        ],
        contentStyle: { background: '#1d1836', color: '#fff' },
        contentArrowStyle: { borderRight: '7px solid  #232631' },
        date: "Jan 2022 - July 2022",
        iconStyle: { background: '#fff', color: '#D70F64' },
        icon: <Icon icon="simple-icons:foodpanda" />
    }
]