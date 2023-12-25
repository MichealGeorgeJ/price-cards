import React from 'react'

const card = () => {
  const data = [
    {
      plan: "FREE",
      price: "$0/month",
      user: "Single User",
      isUser: true,
      storage: "5 GB",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: true,
      communityAccess: "Community Access",
      isCommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: false,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: false,
      subDomain: "Free Subdomain",
      isSubDomain: false,
      reports: "Monthly Status Reports",
      isReports: false
    },
    {
      plan: "PLUS",
      price: "$49/month",
      user: "5 Users",
      isUser: true,
      storage: "50 GB",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: true,
      communityAccess: "Community Access",
      isCommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: true,
      subDomain: "Free Subdomain",
      isSubDomain: true,
      reports: "Monthly Status Reports",
      isReports: false
    },
    {
      plan: "PRO",
      price: "$9/month",
      user: "Unlimited Users",
      isUser: true,
      storage: "150 GB",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: true,
      communityAccess: "Community Access",
      isCommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: true,
      subDomain: "Free Subdomains",
      isSubDomain: true,
      reports: "Monthly Status Reports",
      isReports: true
    }
  ];
  const checkIcon = <i class="fa-solid fa-check"></i>;
  const unCheckIcon = <i class="fa-solid fa-xmark"></i>;
  return (
    <div className='container-fluid pt-4 bg-primary px-4'>
      <div className="row justify-content-center">
        {data.map((item, index) => {
          return (<div className="box col-lg-4 col-sm-9  mb-5  " style={{ border: "1px ", borderRadius: "2rem" }}>
            <div className="card " style={{ borderRadius: "1rem" }}>
              <div className="heading">
                <p className='text-muted text-center mt-3'>{item.plan}</p>
                <h2 className='text-center'>{item.price} </h2>
              </div>
              <div className="card-body mt-4">
                {item.isUser ? (<p>{checkIcon} {item.user} </p>) : (<p>{unCheckIcon}{item.user} </p>)}
                {item.isStorage ? (<p>{checkIcon} {item.storage} </p>) : (<p>{unCheckIcon}{item.storage} </p>)}
                {item.isPublicProjects ? (<p>{checkIcon} {item.publicProjects} </p>) : (<p>{unCheckIcon} {item.publicProjects} </p>)}
                {item.isCommunityAccess ? (<p>{checkIcon} {item.communityAccess} </p>) : (<p className='text-muted'>{unCheckIcon} {item.communityAccess} </p>)}
                {item.isPrivateProjects ? (<p>{checkIcon} {item.privateProjects} </p>) : (<p className='text-muted'>{unCheckIcon} {item.
                  privateProjects} </p>)}
                {item.isPhoneSupport ? (<p>{checkIcon} {item.phoneSupport} </p>) : (<p className='text-muted'>{unCheckIcon} {item.phoneSupport} </p>)}
                {item.isSubDomain ? (<p>{checkIcon} {item.subDomain} </p>) : (<p className='text-muted'>{unCheckIcon} {item.subDomain} </p>)}
                {item.isReports ? (<p>{checkIcon} {item.reports} </p>) : (<p className='text-muted'>{unCheckIcon} {item.reports} </p>)}
              </div>
              <button type="button" className="btn btn-primary m-4 " style={{ border: "solid 1px white", borderRadius: "2rem" }} >BUTTON</button>
            </div>
          </div>)

        })}
      </div>
    </div>
  )
}

export default card;