
module.exports = (values) => {

    let htmlTemplate = `
    <!DOCTYPE html>
    <head>
        <title>index</title>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="./style.css"/>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>

    <body>

        <div id = "title">
            <h1 class="person-name">Riya Gupta</h1>
        </div>

        <div id="sidebar">
            <div class="logo">
                <svg width="250" height="180" >
                    <rect x="50" y="20" rx="20" ry="20" width="150" height="150" class="rect-logo"/>
                </svg> 
                <p class="logo-text">RG</p>
            </div>

            <div class="contact-container">
                <div class="c-info">
                    <h4>
                        <i class="fas fa-envelope"></i>
                        <span>reeya@gmail.com</span>
                    </h4>
                    
                </div>
                <div class="c-info">
                    <h4>
                        <i class="fas fa-phone"></i>
                        <span>09124578999</span>
                    </h4>
                </div>
        
            </div>

            <div class="extras-container">
                
                <h2 class="extras-title">SKILLS</h2>
                <div class="extras-separator"></div>
                <div class="extras-info">
                    <h4>Skill 1</h4>
                    <h4>Skill 2</h4>
                    <h4>Skill 3</h4>
                    <h4>Skill 4</h4>
                    <h4>Skill 5</h4>
                    <h4>Skill 6</h4>
                    
                </div>           

            </div>

            <div class="extras-container">
                
                <h2 class="extras-title">INTERESTS</h2>
                <div class="extras-separator"></div>
                <div class="extras-info">
                    <h4>Interest 1</h4>
                    <h4>Interest 2</h4>
                    <h4>Interest 3</h4>
                    <h4>Interest 4</h4>
                    <h4>Interest 5</h4>
                    <h4>Interest 6</h4>
                    
                </div>           

            </div>

            

        </div>

        <div id = "main-container">

            <div class= "separator">
                <p class="separator-title">PROFILE</p>
            </div>

            <div class="social-links">
                <i class="fas fa-globe"></i>
                <a href="#">https://riya//about.me</a>
            </div>

            <div class="social-links">
                <i class="fab fa-github"></i>
                <a href="#">https://riya//about.me</a>
            </div>

            <div class="social-links">
                <i class="fab fa-facebook"></i>
                <a href="#">https://riya//about.me</a>
            </div>

            <div class="social-links">
                <i class="fab fa-twitter"></i>
                <a href="#">https://riya//about.me</a>
            </div>

            <div class="social-links">
                <i class="fab fa-instagram"></i>
                <a href="#">https://riya//about.me</a>
            </div>

            <div class="social-links">
                <i class="fab fa-linkedin"></i>
                <a href="#">https://riya//about.me</a>
            </div>


            <div class= "separator">
                <p class="separator-title">EDUCATION</p>
            </div>

            <div class="edu-details">
                <p>Vivekanand School</p>
                <h5><span>2015 </span> to <span>2016</span></h5>

                <h4>MCA in apllications</h4>
                <h4>4 years courseand lots of stress</h4>
            </div>

            <div class="edu-details">
                <p>Vivekanand School</p>
                <h5><span>2015 </span> to <span>2016</span></h5>

                <h4>MCA in apllications</h4>
                <h4>4 years courseand lots of stress</h4>
            </div>


            <div class= "separator">
                <p class="separator-title">EXPERIENCE</p>
            </div>

            <div class="exp-details">
                <p>Vivekanand School</p>
                <h4 class="job-detail"><span>Software Developer </span> &emsp; Duration: <span>2.5 months</span></h4>
                <h4>MCA in apllications 4 years courseand lots of stress</h4>
            </div>

            <div class="exp-details">
                <p>Vivekanand School</p>
                <h4 class="job-detail"><span>Software Developer </span> &emsp; Duration: <span>2.5 months</span></h4>
                <h4>MCA in apllications 4 years courseand lots of stress</h4>
            </div>


            <div class= "separator">
                <p class="separator-title">PROJECTS</p>
            </div>

            

            <div class="pro-details">
                <p>Word Flow</p>
                <h4 class="pro-link">
                    <i class="fas fa-link"></i>
                    <a href="#">https://github//riya.in</a>
                </h4>
                <h4>MCA in apllications 4 years courseand lots of stress</h4>
            </div>

            <div class="pro-details">
                <p>Word Flow</p>
                <h4 class="pro-link">
                    <i class="fas fa-link"></i>
                    <a href="#">https://github//riya.in</a>
                </h4>
                <h4>MCA in apllications 4 years courseand lots of stress</h4>
            </div>



        </div>






    </body>
</html>
    `

return htmlTemplate;

}