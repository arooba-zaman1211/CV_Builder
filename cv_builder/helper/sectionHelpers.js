const renderOrEmpty = (data, renderFn) =>
  data && data.length ? renderFn(data) : "";

const projectsToHtml = (projects = []) =>
  renderOrEmpty(
    projects,
    (projects) => `
    <h2>Projects</h2>
    <div class="section-content">
      ${projects
        .map(
          (project) => `
          <div class="project-item">
            <h3>${project.name || "Unnamed Project"}</h3>
            <p>Technologies: ${(project.technologies || []).join(", ")}</p>
            <p><a href='${project.link || "#"}' target='_blank'>${
            project.link || "No Link Provided"
          }</a></p>
          </div>`
        )
        .join("")}
    </div>`
  );

const certificatesToHtml = (certificates = []) =>
  renderOrEmpty(
    certificates,
    (certificates) => `
    <h2>Certificates</h2>
    <div class="section-content">
      ${certificates
        .map(
          (cert) =>
            `<p>${cert.name || "Unnamed Certificate"} (${
              cert.date || "No Date Provided"
            })</p>`
        )
        .join("")}
    </div>`
  );

const languagesToHtml = (languages = []) =>
  renderOrEmpty(
    languages,
    (languages) => `
    
    <div class="section-content">
      ${languages
        .map((lang) => `<p>${lang.language} - ${lang.proficiency}</p>`)
        .join("")}
    </div>`
  );

const educationToHtml = (education = []) =>
  renderOrEmpty(
    education,
    (education) => `
    
    <div class="section-content">
      ${education
        .map(
          (edu) => `
          <div class="education-item">
            <h3>${edu.degree}</h3>
            <p>${edu.institution}</p>
            <p>${edu.year}</p>
            <p>CGPA: ${edu.cgpa}</p>
          </div>`
        )
        .join("")}
    </div>`
  );

const experienceToHtml = (experiences = []) =>
  renderOrEmpty(
    experiences,
    (experiences) => `
    <h2>Work Experience</h2>
    <div class="section-content">
      ${experiences
        .map(
          (exp) => `
          <div class="experience-item">
            <h3>${exp.title || "Unnamed Position"}</h3>
            <p>${exp.description || "No Description Provided"}</p>
          </div>`
        )
        .join("")}
    </div>`
  );

const interestsToHtml = (interests = []) =>
  renderOrEmpty(
    interests,
    (interests) => `
    <h2>Interests</h2>
    <div class="interests">
      ${interests
        .map((interest) => `<span>${interest || "Unnamed Interest"}</span>`)
        .join(" ")}
    </div>`
  );

module.exports = {
  projectsToHtml,
  certificatesToHtml,
  languagesToHtml,
  educationToHtml,
  experienceToHtml,
  interestsToHtml,
};
