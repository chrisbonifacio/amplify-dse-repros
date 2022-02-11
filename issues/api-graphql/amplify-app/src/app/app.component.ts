import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { API } from 'aws-amplify';
import { IssueComment } from './API.service';
import { createIssueComment } from 'src/graphql/mutations';
import { listIssueComments } from 'src/graphql/queries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'amplify-angular-app';
  public createForm: FormGroup;

  /* declare IssueComments variable */
  public IssueComments: Array<IssueComment> = [];

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      author: ['', Validators.required],
      comment: ['', Validators.required],
      issueID: ['1234', Validators.required],
    });
  }

  async ngOnInit() {
    /* fetch IssueComments when app loads */
    const event = (await API.graphql({
      query: listIssueComments,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })) as any;

    this.IssueComments = event.data.listIssueComments.items as IssueComment[];
  }

  public async onCreate(IssueComment: IssueComment) {
    try {
      await API.graphql({
        query: createIssueComment,
        variables: {
          input: {
            ...IssueComment,
          },
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      console.log('item created!');
      this.createForm.reset();
    } catch (e) {
      console.log('error creating IssueComment...', e);
    }
  }
}
