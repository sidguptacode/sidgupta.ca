import bloodagglutination from '../../images/blood_agglutination.png';
import scfinpainting from '../../images/scf_inpainting.png';
import aphrodite from '../../images/aphrodite_logo.png';
import itracker from '../../images/interp_itracker.png';
import fairness from '../../images/vis_fairness.png';
import agglutination from '../../images/agglutination.png';
import fairnesspdf from '../../pdfs/visualizing_ml_fairness.pdf';
import itrackerpdf from '../../pdfs/explaining_itracker.pdf';
import coughmotion from '../../pdfs/coughmotion.pdf';
import cough from '../../images/coughmotion.png';
import scf from '../../pdfs/Contour_Image_Completion.pdf';


var infoList = [
    "1. Combining multiple modalities of data to emulate clinical predictions",
    "2. Making black-box ML models more interpretable to understand",
    "3. Applying ML algorithms in real-world settings to improve health in an accessible way"
]

var papersInfo = {
    "arduous":
    {
        "title": "Machine Learning to Automate the Visual Interpretation of Chemical Agglutination Tests",
        "image": agglutination,
        'authors': ['S. Gupta', 'A. Sklavounos', 'J. Dahmer', 'A. Yong', 'M. Abdullah', 'G. Camacho', 'K. Morton', 'M. Shiu', 'J. Labrecque', 'T. Veres', 'A. Wheeler', 'A. Mariakakis'],
        'conference': 'Published to IEEE PerCom 2022',
        'PDF': "https://ieeexplore.ieee.org/abstract/document/9767280",
        'Code': "https://github.com/sidguptacode/ML_AT_Interpretation",
    },
    "scf_inpainting":
    {
        "title": "Contour-guided Image Completion with Perceptual Grouping",
        "image": scfinpainting,
        'authors': ['M. Rezanejad*', 'S. Gupta*', 'C. Gummalaru', 'R. Marten', 'J. Wilder', 'M. Gruninger', 'D.Walther'],
        'conference': 'Published to BMVC 2021',
        'PDF': scf,
        'Code': "https://github.com/sidguptacode/Stochastic_Completion_Fields",
    },
    "microfluidics":
    {
        "title": "Digital Microfluidic Hemagglutination Assays for Blood Typing, Donor Compatibility Testing, and Hematocrit Analysis",
        "image": bloodagglutination,
        'authors': ['A. Sklavounos', 'J. Lamanna', 'D. Modi', 'S. Gupta', 'J. Callum', 'A. Mariakakis', 'A. Wheeler'],
        'conference': 'Published to Oxford Academic - Clinical Chemistry 2021',
        'PDF': 'https://academic.oup.com/clinchem/advance-article-abstract/doi/10.1093/clinchem/hvab180/6377222?redirectedFrom=fulltext',
        'Code (coming soon)': 'Code will be released soon'
        // 'Video': ""
    }
}
var projectsInfo = {
    "aphrodite":
    {
        "title": "Aphrodite Data Science Lead",
        "image": aphrodite,
        // "details": "Aphrodite is a university-wide matchmaking service that to date has matched over 40,000 students. I work in a team of volunteers to apply ML on a questionnaire dataset, match student participants, and develop insightful data reports that build community",
        "details": "Aphrodite is a student-run project that does university-wide matching-making, for romantic and platonic relationships. I work with 17 other wonderful project volunteers to:",
        // "moreDetails": "I work with a talented group of people to"+":"+"",
        "moreDetails": [
            "1. Apply ML on a student dataset to gain insights on relationship science and improve matching",
            "2. Coordinate matching of students using a robust matching algorithm",
            "3. Develop insightful data reports that build community and highlight similarities among groups of people"
        ],
        'authors': ['https://aphrodite.global/about'],
        'Website': 'https://sg.aphrodite.global/'
    }
    ,
    "eyetracking": {
        "title": "Explaining eye-tracking CNNs",
        "image": itracker,
        "details": "We apply DeepDream and SmoothGrad on CNNs for eye-tracking, and explain some of their black-box behavior",
        'authors': ['Sid Gupta*', 'David Canagasabey*', 'Melissa Halim Lee*'],
        'conference': '',
        'PDF': itrackerpdf,
        'Code': 'https://github.com/sidguptacode/Explaining_Eyetracking_CNNs'
    },
    "fairness": {
        "title": "Visualizing Fairness in ML",
        "image": fairness,
        "details": "We visualize latent embeddings and weights of different ML models on an unfair dataset, comparing fair generative models, debiasing models, and unfair models",
        'url': 'google.com',
        'authors': ['Sid Gupta*', 'Tina Li*', 'Melissa Hu*'],
        'conference': '',
        'PDF': fairnesspdf,
        'Video': 'https://www.youtube.com/watch?v=vqWm_5kT6SA',
        'Code': 'https://github.com/sidguptacode/Visualizing_ML_Fairness'
    },
    "cough": {
        "title": "CoughMotion",
        "image": cough,
        "details": "We propose a CNN model that intakes audio and IMU data in two separate branches, and outputs a cough detection prediction",
        'url': 'google.com',
        'authors': ['Sid Gupta', 'Alex Mariakakis (Supervisor)'],
        'conference': '',
        'PDF': coughmotion
    },
}

var classProjectsInfo = {
    "eyetracking": {
        "title": "CSC413 - Explaining eye-tracking CNNs",
        "image": itracker,
        "details": "We apply DeepDream and SmoothGrad on CNNs for eye-tracking, and explain some of their black-box behavior",
        'authors': ['Sid Gupta*', 'David Canagasabey*', 'Melissa Halim Lee*'],
        'conference': '',
        'PDF': itrackerpdf,
        'Code': 'https://github.com/sidguptacode/Explaining_Eyetracking_CNNs'
    },
    "clouddb": {
        "title": "ECE419 - Distributed system for key-value storage ",
        "image": cough,
        "details": "Using Apache ZooKeeper, we built a distributed decentralized cloud database with replication, crash recovery, and gossipped transactions.",
        'url': 'google.com',
        'authors': ['Sid Gupta', 'Wenqin Ye*', 'Eriyeza Buwembo*'],
        'conference': '',
        'PDF': coughmotion
    },
    "fairness": {
        "title": "CSC412 - Visualizing Fairness in ML",
        "image": fairness,
        "details": "We visualize latent embeddings and weights of different ML models on an unfair dataset, comparing fair generative models, debiasing models, and unfair models",
        'url': 'google.com',
        'authors': ['Sid Gupta*', 'Tina Li*', 'Melissa Hu*'],
        'conference': '',
        'PDF': fairnesspdf,
        'Video': 'https://www.youtube.com/watch?v=vqWm_5kT6SA',
        'Code': 'https://github.com/sidguptacode/Visualizing_ML_Fairness'
    },
    "cough": {
        "title": "CSC495 - CoughMotion",
        "image": cough,
        "details": "We propose a CNN model that intakes audio and IMU data in two separate branches, and outputs a cough detection prediction",
        'url': 'google.com',
        'authors': ['Sid Gupta', 'Alex Mariakakis (Supervisor)'],
        'conference': '',
        'PDF': coughmotion
    }
}

export {papersInfo, projectsInfo, infoList, classProjectsInfo}