
module.exports = (values) => {

    let htmlTemplate = `
    <!DOCTYPE html>
    <head>
        <title>index</title>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <style>
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            }
            
            body {
                font-family: "Roboto Slab";
                background-size: cover;
                font-style: normal;
                height:100%;
            }
            body, html { height: 100%; }
            
            #title {
                padding-top: 2rem;
                padding-bottom: 1rem;
                padding-right: 6%;
                color: white;
                background-color: rgb(135, 138, 138);
            }
            
            .person-name {
                text-align: center;
                text-transform: uppercase;
                font-style: italic;
                /* font-family: "Courier New, monospace"; */
                font-weight: 300;
                font-size: 40px;
            }
            
            #sidebar {
                position: absolute;
                top: 20px;
                left: 2%;
                /* bottom: 0; */
                padding-bottom: 4rem;
                width: 380px;
                background-color: #f7e0c1;
                height:80%;
            }
            
            .logo {
                position: absolute;
                top: 30px;
                left: 60px;
            }
            
            .rect-logo {
                fill: none;
                stroke: black;
                stroke-width: 5;
                opacity: 0.5;
            }
            
            .logo-text {
                position: absolute;
                font-size: 3rem;
                top: 90px;
                left: 110px;
                font-style: italic;
            }
            
            #main-container {
                width: calc(95% - 380px);
                margin-left: 400px;
                padding: 2px 40px 50px;
            }
            
            .separator {
                width: 50%;
                padding: 5px 0;
                text-align: center;
                color: black;
                background-color: rgb(202, 207, 207);
                margin-top: 2rem;
                margin-bottom: 1rem;
            }
            
            .social-links {
                padding-left: 0.8rem;
                margin-bottom: 5px;
                
            }
            
            .social-links i {
                margin-right: 10px;
                font-style: italic;
            }
            
            .social-links a {
                text-decoration: none;
                color: black;
                font-size: 1.2rem;
                font-style: italic;
                
            }
            
            .edu-details,.exp-details,.pro-details{
                padding-left: 0.8rem;
                font-style: italic;
                margin-top: 10px;
            }
            
            .edu-details p,.exp-details p, .pro-details p{
                font-weight:900;
                font-size: 1.5rem;
            }
            
            .edu-details h5{
                color: rgb(166, 168, 168);
                margin-bottom: 10px;
            }
            
            .edu-details h4{
                margin-bottom: 10px;
                font-weight: 600;
            }
            
            
            
            
            .job-detail{
                color: rgb(166, 168, 168);
                margin-bottom: 10px;
            }
            
            .pro-link{
                margin-top: 7px;
                margin-bottom: 7px;
            }
            .pro-link i{
            
                color: rgb(128, 131, 131);
            }
            
            .pro-link a{
                text-decoration: none;
                color: rgb(160, 161, 161);
            }
            
            .contact-container{
                /* position: relative; */
                margin-top: 70%;
                margin-left: 15%;
                font-style: italic;
            }
            
            .c-info{
                margin-bottom: 0.1rem;
                margin-top: 0px;
            }
            
            .c-info h4 span{
                font-weight: 600;
                margin-left: 5px;
            }
            
            .extras-container{
                margin-top: 3rem;
                margin-left: 15%;
                font-style: italic;
            }
            
            .extras-separator{
                margin: 10px auto 10px 0;
                width:90%;
                height:0.1rem;
                background-color: rgb(202, 202, 202);
            }
            
            .extras-info{
                margin-left: 5%;
                font-weight: 500;
            }
      
        </style>
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
    `;

return htmlTemplate;

};