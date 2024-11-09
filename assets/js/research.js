/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Advanced Hybrid Deep Learning Model for Precise Multiclass Classification of Bone Marrow Cancer Cells",
    authors:
      "Shiekh Rahmatullah Sakib, Kamarun Nahar Sara, Md. Anisul Islam & M. M. Fazle Rabbi",
    conferences:
      "Data-Driven Clinical Decision-Making Using Deep Learning in Imaging. Studies in Big Data, vol 152. Springer, Singapore.",
    researchYr: "14 August, 2024",
    citebox: "popup1",
    image: "assets/images/research-page/bone.png",
    citation: {
      vancouver:"",
    },
    abstract:
      "Bone marrow cancer is when rogue blood cells overgrow in the bone marrow by disrupting regular blood cell production. Accurate classification of these cancers is crucial for effective treatment planning and patient management. Leukemia and myeloma (plasma cell cancer), one types of malignancy that can damage the white blood cells (WBC) within the bone marrow. White blood cell identification, counting, and segmentation are crucial steps in effectively studying a few malignant tumors. In this study, an automated classification method has been proposed for plasma cell cancer which are Multiple Myeloma (MM), Acute Lymphocytic Leukemia (ALL), and Acute Myeloid Leukemia (AML). This bone marrow model image is pre-processed and trained with the parameterized hybrid convolutional neural network and also compared with the CNN framework (InceptionV3, ResNet50, and Vgg16) to achieve accurate classification results. The optimal model was selected by identifying the one with the lowest loss for the validation data. Achieving a high accuracy rate of 99.58% was made possible through the development of hybrid model algorithms, which were carefully crafted by monitoring training loss and validation loss to identify the optimal value. This process of monitoring the training and validation of a deep learning model can help identify the optimal accuracy and loss values. This proposed model can reduce classification time, condense image information, and speed up processing times with more precise weight limits.",
    absbox: "absPopup1",
    link:"https://link.springer.com/chapter/10.1007/978-981-97-3966-0_5",
  },

  {
    title: "Time Series Analysis and Forecasting of Air Quality Index of Dhaka City of Bangladesh",
    authors:
      "Sheikh Rahmatulla Sakib, Kamarun Nahar Sara, Md. Tahmid Hossain Rasel, Md. Masudul Islam Asif, Md. Aynul Hasan Nahid, Md. Saifur Rahman, M. F. Mridha, Ashraful Islam",
    conferences:
      "2023 IEEE World AI IoT Congress (AIIoT) Seattle, WA, USA",
    researchYr: "10th June, 2023",
    citebox: "popup2",
    image: "assets/images/research-page/air.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "In Dhaka, the capital city of Bangladesh, various sources including vehicle emissions, industrial activities, brick kilns, building sites, and open rubbish burning contribute to the air pollution problem. To assess the air quality, the Air Quality Index (AQI) is utilized, which categorizes air quality based on pollutant concentration. In this study, we have built ARIMA, Auto-ARIMA, SARIMAX, and VAR models to predict the air quality of Dhaka. Unlike previous studies, we have utilized hourly air pollutants factors such as PM 2.5 , PM 10 , SO 2 , CO, NO 2 , and O 3 to forecast air quality. Our novel approach enables us to predict the monthly and weekly air quality of Dhaka city. Our analysis reveals that the SARIMAX model, which takes into account seasonal patterns, trends, and external factors, is the most accurate in predicting Dhaka city’s air quality. The model’s prediction performance is assessed using statistical indicators such as mean absolute percentage error and root mean square error. The study highlights that the SARIMAX model could aid policymakers in evaluating the efficacy of air pollution control measures.",
    absbox: "absPopup2",
    link:"https://ieeexplore.ieee.org/document/10174539",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      link,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${link}"class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
 
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
