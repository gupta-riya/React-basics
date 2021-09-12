
module.exports = (values) => {


    const {
        firstname,
        lastname,
        email,
        phone,
        github,
        linkedin,
        facebook,
        instagram,
        twitter,
        website,

        college,
        startyear1,
        endyear1,
        qualification1,
        description1,
        school,
        startyear2,
        endyear2,
        qualification2,
        description2,


        title1,
        link1,
        pdescription1,
        title2,
        link2,
        pdescription2,
        title3,
        link3,
        pdescription3,


        //experience
        institute1,
        position1,
        duration1,
        edescription1,
        institute2,
        position2,
        duration2,
        edescription2,

        //extras
        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        skill6,

        interest1,
        interest2,
        interest3,
        interest4,
        interest5,
        interest6
    } = values;



    let htmlTemplate = `
    <!DOCTYPE html>
    <head>
        <title>${firstname}'s Resume</title>
        
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
                padding-left: 15%;
            }
            body, html { height: 100%; }
            
            #title {
                padding-top: 2rem;
                padding-bottom: 1rem;
                padding-right: 6%;
                color: white;
                background-color: rgb(135, 138, 138);
                width: 70%;
            }
            
            .person-name {
                text-align: right;
                text-transform: uppercase;
                font-style: italic;
                /* font-family: "Courier New, monospace"; */
                font-weight: 300;
                font-size: 40px;
            }
            
            #sidebar {
                position: absolute;
                top: 20px;
                left: 17%;
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
                text-transform:uppercase;
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
                text-transform:capitalize;

            }
            
            .edu-details h5{
                color: rgb(166, 168, 168);
                margin-bottom: 10px;
                text-transform:capitalize;

            }
            
            .edu-details h4{
                margin-bottom: 10px;
                font-weight: 600;
                text-transform:capitalize;

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
                text-transform:capitalize;

            }
      
        </style>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>

    <body>

        <div id = "title">
            <h1 class="person-name">${firstname}${' '}${lastname}</h1>
        </div>

        <div id="sidebar">
            <div class="logo">
                <svg width="250" height="180" >
                    <rect x="50" y="20" rx="20" ry="20" width="150" height="150" class="rect-logo"/>
                </svg> 
                <p class="logo-text">${firstname[0]}${lastname[0]}</p>
            </div>

            <div class="contact-container">`

            if(email!='' && email!=null)
                htmlTemplate += `
                <div class="c-info">
                    <h4>
                        <i class="fas fa-envelope"></i>
                        <span>${email}</span>
                    </h4>
                    
                </div>`;

              if(phone!='' && phone!=null)
                htmlTemplate += `
                <div class="c-info">
                    <h4>
                        <i class="fas fa-phone"></i>
                        <span>${phone}</span>
                    </h4>
                </div>  `              
        
            htmlTemplate += `</div>

            <div class="extras-container">
                
                <h2 class="extras-title">SKILLS</h2>
                <div class="extras-separator"></div>
                <div class="extras-info"> `

                if(skill1!='' || skill1!=null)
                    htmlTemplate+=`<h4>${skill1}</h4>`;
                if(skill2!='' || skill2!=null)
                    htmlTemplate+=`<h4>${skill2}</h4>`;
                if(skill3!='' || skill3!=null)
                    htmlTemplate+=`<h4>${skill3}</h4>`;
                if(skill4!='' || skill4!=null)
                    htmlTemplate+=`<h4>${skill4}</h4>`;
                if(skill5!='' || skill5!=null)
                    htmlTemplate+=`<h4>${skill5}</h4>`;
                if(skill6!='' || skill6!=null)
                    htmlTemplate+=`<h4>${skill6}</h4>`;              
                
            htmlTemplate +=    `   
                </div>           

            </div>

            <div class="extras-container">
                
                <h2 class="extras-title">INTERESTS</h2>
                <div class="extras-separator"></div>
                <div class="extras-info">`;

                if(interest1!='' || interest1!=null)
                    htmlTemplate+=`<h4>${interest1}</h4>`;
                if(interest2!='' || interest2!=null)
                    htmlTemplate+=`<h4>${interest2}</h4>`;
                if(interest3!='' || interest3!=null)
                    htmlTemplate+=`<h4>${interest3}</h4>`;
                if(interest4!='' || interest4!=null)
                    htmlTemplate+=`<h4>${interest4}</h4>`;
                if(interest5!='' || interest5!=null)
                    htmlTemplate+=`<h4>${interest5}</h4>`;
                if(interest6!='' || interest6!=null)
                    htmlTemplate+=`<h4>${interest6}</h4>`;
                   
            htmlTemplate +=`
                </div>           

            </div>

            

        </div>

        <div id = "main-container">

            <div class= "separator">
                <p class="separator-title">PROFILE</p>
            </div>

            `;
            if(website!=null && website!='')
            htmlTemplate+=
            `
            <div class="social-links">
                <i class="fas fa-globe"></i>
                <a href="${website}">${website}</a>
            </div>
            `
            if(github!=null && github!='')
            htmlTemplate+=
            `
            <div class="social-links">
                <i class="fab fa-github"></i>
                <a href="${github}">${github}</a>
            </div>

            `
            if(facebook!=null && facebook!='')
            htmlTemplate+=
            `
            <div class="social-links">
                <i class="fab fa-facebook"></i>
                <a href="${facebook}">${facebook}</a>
            </div>
            `
            if(twitter!=null && twitter!='')
            htmlTemplate+=
            `
            <div class="social-links">
                <i class="fab fa-twitter"></i>
                <a href="${twitter}">${twitter}</a>
            </div>
            `
            if(instagram!=null && instagram!='')
            htmlTemplate+=
            `
            <div class="social-links">
                <i class="fab fa-instagram"></i>
                <a href="${instagram}">${instagram}</a>
            </div>
            `
            if(linkedin!=null && linkedin!='')
            htmlTemplate+=
            `
            <div class="social-links">
                <i class="fab fa-linkedin"></i>
                <a href="${linkedin}">${linkedin}</a>
            </div>`

            htmlTemplate += `
            <div class= "separator">
                <p class="separator-title">EDUCATION</p>
            </div>

            <div class="edu-details">
                <p>${college}</p>
                <h5><span>${startyear1} </span> to <span>${endyear1}</span></h5>

                <h4>${qualification1}</h4>
                <h4>${description1}</h4>
            </div>

            <div class="edu-details">
                <p>${school}</p>
                <h5><span>${startyear2} </span> to <span>${endyear2}</span></h5>

                <h4>${qualification2}</h4>
                <h4>${description2}</h4>
            </div>


            <div class= "separator">
                <p class="separator-title">EXPERIENCE</p>
            </div>

            <div class="exp-details">
                <p>${institute1}</p>
                <h4 class="job-detail"><span>${position1} </span> &emsp; Duration: <span>${duration1}</span></h4>
                <h4>${edescription1}</h4>
            </div>

            <div class="exp-details">
                <p>${institute2}</p>
                <h4 class="job-detail"><span>${position2} </span> &emsp; Duration: <span>${duration2}</span></h4>
                <h4>${edescription2}</h4>
            </div>


            <div class= "separator">
                <p class="separator-title">PROJECTS</p>
            </div>

            

            <div class="pro-details">
                <p>${title1}</p>
                <h4 class="pro-link">
                    <i class="fas fa-link"></i>
                    <a href="${link1}">${link1}</a>
                </h4>
                <h4>${pdescription1}</h4>
            </div>

            <div class="pro-details">
                <p>${title2}</p>
                <h4 class="pro-link">
                    <i class="fas fa-link"></i>
                    <a href="${link2}">${link2}n</a>
                </h4>
                <h4>${pdescription2}</h4>
            </div>

            `
            if(title3!='' && title3!=null)
            htmlTemplate += `
                <div class="pro-details">
                    <p>${title3}</p>
                    <h4 class="pro-link">
                        <i class="fas fa-link"></i>
                        <a href="${link3}">${link3}n</a>
                    </h4>
                    <h4>${pdescription3}</h4>
                </div>
            `;

            htmlTemplate += `
                </div>






    </body>
</html>
    `;

return htmlTemplate;

};