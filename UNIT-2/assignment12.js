function determineAccess( role, experience, active,department ){
   return (role==="admin") ? (active ? ( experience > 5 ?( department ==="IT" ? "Full IT Admin Access": "Full General Admin Access") :"Limited Admin access" ):"Admin Access Revoked" )
         :(role=== "manager")? ( active ? (experience > 3  ? ( department === "Sales" ? "Full Sales Manager" : "Full Manager Access" ) : "Limited Manager Revoked"): "Manager Access Revoked")
         :(role==="user") ? (active ? ( department === "Support" ? "Priority Support Access" : "User Access" ):"User Access Revoked"):"Invalid Role";
}   
console.log(determineAccess( "admin",3,false,"Finance"))
