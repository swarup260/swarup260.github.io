import data from './projects.json'

$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.carousel').carousel({
    fullWidth: true,
    indicators: true
  });
});

/* render projects */
const projects = data.projects.sort((a, b) => a.order - b.order);
const workSection = document.querySelector('#work');
let workSectionContent = ` <h2 class="section-title">My Work</h2>`;

for (let index = 0; index < projects.length; index++) {

  let project = projects[index];
  let keyPointsList = projects[index].keyPoints.map(keyPoint => `<li> <strong> ${keyPoint} </strong> </li>`).join(" ");

  workSectionContent += `
  <div class="card horizontal" data-aos="fade-up"
  data-aos-anchor-placement="center-bottom">
      <div class="card-image hide-on-small-only">
      </div>
      <div class="card-stacked">
          <div class="card-content">
              <h5>${project.name}</h5>
              <p>${project.description}</p>
              <blockquote>
                <ul>
                  ${keyPointsList}
                </ul>
              </blockquote>
              <h6 class="">Technology used: - <em>${project.technologyUsed}</em></h6>
          </div>
          <div class="card-action">
              <a href="${project.url}" target="blank">View Project</a>
          </div>
      </div>
  </div>

  `;

}

workSection.innerHTML = workSectionContent;




const copyrighttText = document.querySelector('#copyright');
const yr = new Date();
copyrighttText.innerHTML = `Copyright &#169; ${yr.getFullYear()} <span>Swarup Das</span>`