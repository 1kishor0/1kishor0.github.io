/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Automated Methods for Detection and Classification Bone Marrow cancer leukemia (ALL, AML) and Plasma cancer (MM) based on bone marrow microscopic blood smear images using deep learning.",
    authors:
      "",
    conferences:
      "",
    researchYr: "Ongoing",
    citebox: "popup1",
    image: "assets/images/research-page/bone.png",
    citation: {
      vancouver:"",
    },
    abstract:
      "White Blood Cells assume a significant part in noticing the ailment of a person. Leukemia and Myeloma (cancerof plasma cell) is a type of cancer which can affected the white blood cells (WBC) in bone marrow. The recognition, counting, and segmentation of white blood cells are fundamental stages in the powerful analysis of a few malignant cancers. This research purpose is to develop an automated system which is classify the leukemia’s two major cancer (ALL, AML) and plasma cells cancer Multiple Myeloma (MM) with the convolutional neural network. CNN framework (Inception-V3, ResNet50, and DenseNet121) are utilized to prepare the model on the bone marrow pictures to accomplish exact classification results and then using Transfer Learning to get optimized result.",
    absbox: "absPopup1",
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
                    <a href="https://ieeexplore.ieee.org/document/10174539"class="paperTitle"> ${title} </a> 
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
