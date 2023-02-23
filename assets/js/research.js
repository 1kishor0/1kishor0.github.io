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
    title: "A Deep Learning Approach to predicting Dhaka Air quality with time series Analysis.",
    authors:
      "",
    conferences:
      "",
    researchYr: "Ongoing",
    citebox: "popup2",
    image: "assets/images/research-page/air.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "The results show that the ARIMA model has shown a good performance in predicting the daily AQI values at different locations in Dhaka city. The distribution of annual mean values obtained from this model shows that it is possible to predicted weekly and monthly forecasting AQI values when we consider time series analysis for more three one year instead of just one year.",
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
                    <a href="#0" class="paperTitle"> ${title} </a> 
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
