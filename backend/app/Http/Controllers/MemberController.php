<?php

namespace App\Http\Controllers;

use App\Enums\Http;
use App\Helpers\MessageResponse;
use App\Http\Class\Status;
use App\Http\Requests\StoreMemberRequest;
use App\Http\Requests\UpdateMemberRequest;
use App\Http\Resources\MemberResource;
use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Member::all();

        return new MessageResponse(
            message: 'Get all members',
            code: Http::OK,
            body: [
                'data' => MemberResource::collection($data)
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMemberRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMemberRequest $request)
    {
        $member = Member::create([
            'name'      => $request->name,
            'title'     => $request->title,
            'age'       => $request->age,
            'email'     => $request->email,
            'phone'     => $request->phone,
            'status'    => $request->status ? Status::getCode($request->status) : Status::default(),
        ]);

        return new MessageResponse(
            message: 'Create member successfully',
            code: Http::CREATED,
            body: [
                'data' => new MemberResource($member)
            ]
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function show(Member $member)
    {
        return new MessageResponse(
            message: 'Get member by id',
            code: Http::OK,
            body: [
                'data' => new MemberResource($member)
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMemberRequest  $request
     * @param  \App\Models\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMemberRequest $request, Member $member)
    {
        $member->update([
            'name'      => $request->name ?? $member->name,
            'title'     => $request->title ?? $member->title,
            'age'       => $request->age ?? $member->age,
            'email'     => $request->email ?? $member->email,
            'phone'     => $request->phone ?? $member->phone,
            'status'    => $request->status ? Status::getCode($request->status) : $member->status,
        ]);


        return new MessageResponse(
            message: 'Update member successfully',
            code: Http::OK,
            body: [
                'data' => new MemberResource($member)
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function destroy(Member $member)
    {
        $member->delete();

        return new MessageResponse(
            message: 'Delete member successfully',
            code: Http::OK,
        );
    }

}
