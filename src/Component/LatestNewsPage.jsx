import React,{useEffect} from 'react';
import './LatestNewsPage.scss'
import Navbar from './Navbar/Navbar';

const newsData = [
    { id: 1, title: 'New Advanced MRI Scanner Installed', description: 'Our hospital has recently installed a state-of-the-art MRI scanner for faster and more accurate diagnostics.', date: 'March 5, 2025' },
    { id: 2, title: 'Free Health Checkup Camp', description: 'Join us for a free health checkup camp this weekend. Experienced doctors will be available for consultation.', date: 'March 10, 2025' },
    { id: 3, title: 'New Pediatric Wing Opening Soon', description: 'Our upcoming pediatric wing will feature advanced facilities to ensure children receive the best care possible.', date: 'March 15, 2025' },
    { id: 4, title: '24/7 Emergency Services Expanded', description: 'We are expanding our emergency services to provide 24/7 care with enhanced facilities.', date: 'March 20, 2025' },
    { id: 5, title: 'Heart Care Awareness Program', description: 'Attend our informative session on heart health and preventive care strategies.', date: 'March 22, 2025' },
    { id: 6, title: 'Advanced Cancer Treatment Unit', description: 'Our newly established cancer treatment unit is equipped with cutting-edge technology.', date: 'March 25, 2025' },
    { id: 7, title: 'Mental Health Support Initiative', description: 'We have introduced new mental health support programs to assist patients and their families.', date: 'March 28, 2025' },
    { id: 8, title: 'Annual Blood Donation Drive', description: 'Participate in our blood donation drive to help save lives in critical situations.', date: 'April 1, 2025' },
    { id: 9, title: 'Nutrition and Wellness Workshop', description: 'Our nutritionists will host a workshop on balanced diets and healthy living.', date: 'April 5, 2025' },
    { id: 10, title: 'Physiotherapy Services Launched', description: 'Our hospital now offers comprehensive physiotherapy services for faster recovery.', date: 'April 10, 2025' },
    { id: 11, title: 'New Advanced MRI Scanner Installed', description: 'Our hospital has recently installed a state-of-the-art MRI scanner for faster and more accurate diagnostics.', date: 'March 5, 2025' },
    { id: 12, title: 'Free Health Checkup Camp', description: 'Join us for a free health checkup camp this weekend. Experienced doctors will be available for consultation.', date: 'March 10, 2025' },

];

const LatestNewsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            <Navbar />
            <div className="latest-news">
                <h2>Latest Hospital News & Articles</h2>
                <div className="news-list">
                    {newsData.map((news) => (
                        <div key={news.id} className="news-card">
                            <h3>{news.title}</h3>
                            <p>{news.description}</p>
                            <span>{news.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default LatestNewsPage;
