import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://192.168.1.103:3000/home');
  }

  getProducts() {
    return this.http.get('http://192.168.1.103:3000/products');
  }

  getLocalProducts() {
      return {
        menu: {
          title: 'SnowGrain',
          links: [
            {
              label: 'Home',
              href: 'home'
            },
            {
              label: 'Articles',
              href: 'article',
              subLinks: [
                {
                  label: 'Link 1'
                }
              ]
            },
            {
              label: 'Products',
              href: 'products',
              subLinks: [
                {
                  label: 'Link 1'
                }
              ]
            },
            {
              label: 'Offers',
              href: '#',
              subLinks: [
                {
                  label: 'Link 1'
                }
              ]
            },
            {
              label: 'Contact Us',
              href: '#'
            },
            {
              label: 'Privacy Policy',
              href: '#'
            }
          ],
          search: {
            isVisible: true
          },
          login: {
            isVisible: true
          }
        },
        products: [
          {
            title: 'Title of the Product Local',
            content: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe' +
            'eveniet ut et voluptates repudiandae.',
            image: 'https://mdbootstrap.com/img/Photos/Others/photo8.jpg'
          },
          {
            title: 'Title of the Product',
            content: 'Temporibus autem quibusdam et aut officiis debitis aut' +
            'rerum necessitatibus saepe eveniet ut et voluptates repudiandae.',
            image: 'https://mdbootstrap.com/img/Photos/Others/images/82.jpg'
          },
          {
            title: 'Title of the Product',
            content: 'Temporibus autem quibusdam et aut officiis debitis aut' +
            'rerum necessitatibus saepe eveniet ut et voluptates repudiandae.',
            image: 'https://mdbootstrap.com/img/Photos/Others/images/54.jpg'
          }
        ],
        footers: []
      };
  }

  getLocalData() {
      return {
        menu: {
          title: 'SnowGrain',
          links: [
            {
              label: 'Home',
              href: '#'
            },
            {
              label: 'Articles',
              href: 'article',
              subLinks: [
                {
                  label: 'Link 1'
                }
              ]
            },
            {
              label: 'Products',
              href: '/products',
              subLinks: [
                {
                  label: 'Link 1'
                }
              ]
            },
            {
              label: 'Offers',
              href: '#',
              subLinks: [
                {
                  label: 'Link 1'
                }
              ]
            },
            {
              label: 'Contact Us',
              href: '#'
            },
            {
              label: 'Privacy Policy',
              href: '#'
            }
          ],
          search: {
            isVisible: true
          },
          login: {
            isVisible: true
          }
        },
        slider: {
          items: [
            {
              url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg',
              title: 'SnowGrain',
              subTitle: 'SnowGrain Content'
            },
            {
              url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg',
              title: 'SnowGrain',
              subTitle: 'SnowGrain Content'
            },
            {
              url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg',
              title: 'SnowGrain',
              subTitle: 'SnowGrain Content'
            }
          ]
        },
        projects: [
          {
            title: 'Title of the news',
            content: 'Temporibus autem quibusdam et aut officiis debitis aut rerum ' +
            'necessitatibus saepe eveniet ut et voluptates repudiandae.',
            image: 'https://mdbootstrap.com/img/Photos/Others/images/58.jpg'
          },
          {
            title: 'Title of the news',
            content: 'Temporibus autem quibusdam et aut officiis debitis aut rerum ' +
            'necessitatibus saepe eveniet ut et voluptates repudiandae.',
            image: 'https://mdbootstrap.com/img/Photos/Others/project4.jpg'
          },
          {
            title: 'Title of the news',
            content: 'Temporibus autem quibusdam et aut officiis debitis aut ' +
            'rerum necessitatibus saepe eveniet ut et voluptates repudiandae.',
            image: 'https://mdbootstrap.com/img/Photos/Others/images/88.jpg'
          }
        ],
        deals: [
          {
            title: 'Title of the news',
            content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident',
            image: 'https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg',
            type: 'Marketing'
          },
          {
            title: 'Title of the news',
            content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident',
            image: 'https://mdbootstrap.com/img/Photos/Others/images/19.jpg',
            type: 'Entertaintment'
          },
          {
            title: 'Title of the news',
            content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident',
            image: 'https://mdbootstrap.com/img/Photos/Others/images/48.jpg',
            type: 'Travel'
          },
          {
            title: 'Title of the news',
            content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg',
            type: 'Technology'
          }
        ],
        footers: [
          {
            title: 'Product categories',
            items: [
              'Product details 1',
              'Product details 2',
              'Product details 3',
              'Product details 4'
            ]
          },
          {
            title: 'Article Section',
            items: [
              'Article 1',
              'Article 2',
              'Article 3',
              'Article 4'
            ]
          },
          {
            title: 'Others',
            items: [
              'Termas and Conditions',
              'Provacy Policy'
            ]
          }
        ]
      };
  }

}
