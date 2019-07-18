import React, {Component} from 'react';
import HomeCard from'../ui/HomeCard';

export default class Home extends Component{

    HomeCardReleases = {
        title:'Releases',
        text: 'Manage Releases',
        action: () => alert(
            'Releases Clicked'
        )
    }
    
    HomeCardBacklog = {
        title:'Backlog',
        text: 'Manage Backlog',
        action: () => alert(
            'Backlog Clicked'
        )
    }
    HomeCardSprints = {
        title:'Sprints',
        text: 'Manage Sprints',
        action: () => alert(
            'Sprints Clicked'
        )
    }
    render(){
        return(
            <div className="container  text-center">
                <div className="row">
                    <HomeCard  title={this.HomeCardReleases.title}
                        text={this.HomeCardReleases.text}
                        action={this.HomeCardReleases.action}/>
                        {/* Dessa forma ele descontrei o objeto e expoê por completo */}
                    <HomeCard {...this.HomeCardBacklog} />
                    <HomeCard {...this.HomeCardSprints} />
                </div>
            </div>
        );
    }
}