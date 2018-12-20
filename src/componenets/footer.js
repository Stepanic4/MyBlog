import React, {Component} from 'react';

export class Footer extends Component {
    render() {
        return (
            <div className={'footer py-10'}>
                <div className={'content py-0'}>
                    <div className={'row'}>
                        <div className={'col'}>
                            <a href="https://github.com/Stepanic4">
                                <i className={'fa fa-github fa-2x mr-1'}></i>GitHub
                            </a>
                        </div>
                        <div className={'col text-right'}>
                            <div>
                                <a href="https://www.linkedin.com/in/ivan-zolotukhin/">
                                    Linked<i className={'fa fa-linkedin fa-2x ml-1'}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}