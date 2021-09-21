import React, { Component } from "react";
import FriendItem from "./Frienditem";

const friendList = [
    {
    imageUrl : "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/102768307_2639002833003827_7787718752609676776_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=S2xUTZ0XTroAX_kri_B&_nc_ht=scontent.fktm8-1.fna&oh=bfae4209f60cedd6f0c1d8bf6e7d6bba&oe=614DCCA9",
    name : "Mukesh Khadka",
    title : "System Administrator"
},
{
    imageUrl : "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=x9vhBp9ClkgAX8yV2U9&_nc_ht=scontent.fktm8-1.fna&oh=2b22a089c9c18eabbaa4d586c5625ddb&oe=614F5748",
    name : "Nawaraj Bhandari",
    title : "Creative Designer"
},
{
    imageUrl : "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/233367324_2821234264782458_3854471340021096011_n.jpg?_nc_cat=101&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4riJ27oNkfoAX_SlAT0&_nc_ht=scontent.fktm8-1.fna&oh=3ee198265e77c94642728243f7bd703e&oe=612E1899",
    name : "Raj Kumar Khadka",
    title : "Web Develepor"
},
{
    imageUrl : "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/60254260_2307683819474681_1221678931673874432_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ccmet4N6XBMAX9qN6A7&_nc_ht=scontent.fktm8-1.fna&oh=be3dc9e0d22d35c0fec6711f72eb12e6&oe=614DD971",
    name : "Niraj Prasad Bhatt",
    title : "ASP .net Developer"
},
{
    imageUrl : "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/60254260_2307683819474681_1221678931673874432_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ccmet4N6XBMAX9qN6A7&_nc_ht=scontent.fktm8-1.fna&oh=be3dc9e0d22d35c0fec6711f72eb12e6&oe=614DD971",
    name : "Bishu Thapa",
    title : "Trader & Investor"
},
];

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            searchText : "" ,   //Comma here but not SEMICOLON
        };
    }
handleChange = (e) => {
    const value = e.target.value;
    this.setState({
        searchText :value,
    });
};

filterFriend = () => {
    return friendList.filter(item => {
        return item.name.toLowerCase().includes(this.state.searchText.toLowerCase());
    });
}

    render(){
        const filtered = this.filterFriend();
        return(
            <div>
                <h2>Online Friend Search</h2>
               
                <input placeholder = "Search" 
                onChange={this.handleChange} 
                value = {this.state.searchText}
                 />


               {/*  /* 

                <FriendItem
                 name="Ramesh Syangtan" 
                 title="Software Engineer"
                 imageUrl = "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/57935954_1271463909689124_7090610707816775680_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=YGJc_P1KOXoAX-YwVvH&tn=MU1EDEelvpMpRwPd&_nc_ht=scontent.fktm8-1.fna&oh=127b174771dbcad0fbc3193b528a83e3&oe=614F3397" 
                 />
                 {[
                    <FriendItem
                    name = {friendList[0].name}
                    // title = {friendList[0].title}
                    imageUrl= {friendList[0].imageUrl} />
                 ]} 
                <FriendItem 
                name = {friendList[0].name}
                title = {friendList[0].title}
                imageUrl={friendList[0].imageUrl } />
                 */ }
                {/* <FriendItem name = "Jane Doe" title="Farmer" /> */}

                 {filtered.map((item, index) => {
                     return <FriendItem
                     key={index}
                     name={item.name}
                     title={item.title}
                     imageUrl={item.imageUrl}
                      />;
                 })} 
            </div>
        );
    }
}

export default App;