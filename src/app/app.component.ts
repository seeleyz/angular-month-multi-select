import { Component } from '@angular/core';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'nz-demo-date-picker-basic',
  template: `
  监测时间：
  <input nz-input [ngModel]="selectedYearMonth.join(',')"
  nz-popover
  [nzPopoverContent]="contentTemplate"
  nzPopoverTrigger="click"
  nzPopoverPlacement="bottomLeft"
   />
  <ng-template #contentTemplate>
    <div style="width: 240px">
      <div class="header">
        <span nz-icon nzType="left" nzTheme="outline" (click)="prevYear()"></span>
        {{currentYear}}年
        <span nz-icon nzType="right" nzTheme="outline" (click)="nextYear()"></span>
      </div>
      <div class="content">
        <div class="month" *ngFor="let m of months">
          <div [class.selected]="yearMonthObj[currentYear+'-'+m.id]" (click)="setMonth(currentYear, m.id)">{{m.label}}月</div>
        </div>
      </div>
      <div class="footer">
        <button nz-button nzType="link" nzBlock (click)="clear()">清除</button>
      </div>
    </div>
  </ng-template>
  `,
  styles: [
    `
      input {
        width: 240px;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #efefef;
        padding: 8px 4px;
      }
      .header span {
        padding: 4px;
        cursor: pointer;
      }
      .header span:hover {
        background: #fcfcfc;
      }
      .content {
        display: flex;
        flex-wrap: wrap;
      }
      .month {
        width: calc(100% / 3);
        text-align: center;
      }
      .month div {
        width: 70%;
        margin: 0 auto;
        cursor: pointer;
        margin-top: 8px;
        margin-bottom: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        border-radius: 4px;
      }
      .month div:hover {
        color: #40a9ff;
        background: #e6f7ff;
      }
      .month div.selected {
        color: #fff;
        background: #1890ff;
      }
      .footer {
        border-top: 1px solid #efefef;
        padding-left: 4px;
        padding-right: 4px;
      }
      .footer button {
        margin-top: 4px;
      }
      .footer button:hover {
        color: #4a4a4a;
        background: #f0f0f0;
      }

      ::ng-deep .ant-popover-inner-content {
        padding: 0;
      }
    `,
  ],
})
export class NzDemoDatePickerBasicComponent {
  value: string;
  currentYear = new Date().getFullYear();
  months = [
    { label: 1, id: '01' },
    { label: 2, id: '02' },
    { label: 3, id: '03' },
    { label: 4, id: '04' },
    { label: 5, id: '05' },
    { label: 6, id: '06' },
    { label: 7, id: '07' },
    { label: 8, id: '08' },
    { label: 9, id: '09' },
    { label: 10, id: '10' },
    { label: 11, id: '11' },
    { label: 12, id: '12' },
  ];
  selectedYearMonth = [];
  yearMonthObj = {};

  constructor(private i18n: NzI18nService) {}

  prevYear(): void {
    this.currentYear--;
  }

  nextYear(): void {
    this.currentYear++;
  }

  setMonth(year: number, month: number): void {
    const d = `${year}-${month}`;
    const idx = this.selectedYearMonth.findIndex((i) => i === d);
    if (idx === -1) {
      this.selectedYearMonth.push(d);
      this.yearMonthObj[d] = true;
    } else {
      this.selectedYearMonth.splice(idx, 1);
      this.yearMonthObj[d] = false;
    }
  }

  clear(): void {
    this.selectedYearMonth = [];
    this.yearMonthObj = {};
  }
}
