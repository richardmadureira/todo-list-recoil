import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../states/listStatsState';

export default function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-3 text-center"><span className="badge badge-info w-100">{totalNum} item(s)</span></div>
        <div className="col-xs-12 col-sm-6 col-md-3 text-center"><span className="badge badge-info w-100">{totalCompletedNum} completed</span></div>
        <div className="col-xs-12 col-sm-6 col-md-3 text-center"><span className="badge badge-info w-100">{totalUncompletedNum} uncompleted</span></div>
        <div className="col-xs-12 col-sm-6 col-md-3 text-center"><span className="badge badge-info w-100">{formattedPercentCompleted}% completed</span></div>
      </div>
      <div className="row">
        <div className="col py-1">
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: formattedPercentCompleted + '%' }} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>

    </>
  );
}